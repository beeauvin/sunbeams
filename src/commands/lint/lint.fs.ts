/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import * as fs from 'fs'
import * as path from 'path'

interface ConfigSearchResponse {
  files: string[]
  directory: string
}

interface ConfigCreateResponse {
  configPath: string
  directory: string
}

function findConfigFiles(): ConfigSearchResponse {
  const filesToSearch = ['package.json', '.eslintrc', '.eslintrc.js']
  const filesFound = []

  const rootDirectory = path.resolve('/')
  let currentDirectory = process.cwd()

  while (currentDirectory !== rootDirectory) {
    for (const file of filesToSearch) {
      const filePath = path.join(currentDirectory, file)
      if (fs.existsSync(filePath)) filesFound.push(filePath)
    }

    if (filesFound.length > 0)
      return { files: filesFound, directory: currentDirectory }
    else currentDirectory = path.dirname(currentDirectory)
  }

  // If reached the root directory and still no matching file found, throw an error
  throw new Error('no package or config file found')
}

async function writeEslintConfig(dir: string): Promise<void> {
  const eslintConfig = JSON.stringify(
    {
      extends: ['@sunbeams']
    },
    null,
    2
  )

  const eslintConfigPath = path.join(dir, '.eslintrc')

  fs.promises
    .writeFile(eslintConfigPath, eslintConfig, 'utf-8')
    .then(() => {
      console.log(`created ${eslintConfigPath}`)
    })
    .catch((error) => {
      throw new Error(error)
    })
}

export async function createEslintConfigIfNeeded(): Promise<ConfigCreateResponse> {
  const { files, directory } = findConfigFiles()
  const existingConfig = files.find(
    (file) => file.endsWith('.eslintrc') || file.endsWith('.eslintrc.js')
  )

  if (existingConfig !== undefined) {
    return { configPath: existingConfig, directory }
  } else {
    const hasPackageJson = files.some((file) => file.endsWith('package.json'))
    if (hasPackageJson) {
      const configPath = path.join(directory, '.eslintrc')
      await writeEslintConfig(directory)
      return { configPath, directory }
    } else {
      throw new Error(
        'no package.json or .eslintrc file found and was unable to create one'
      )
    }
  }
}
