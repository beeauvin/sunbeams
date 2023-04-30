/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import * as path from 'path'
import { recursivelyFindFilesUp, writeFile } from '../../utilities/filesystem'

interface ConfigCreateResponse {
  configPath: string
  directory: string
}

export async function createEslintConfigIfNeeded(): Promise<ConfigCreateResponse> {
  const filesToSearch = ['package.json', '.eslintrc', '.eslintrc.js']
  const { files, directory } = recursivelyFindFilesUp(filesToSearch, process.cwd())
  if (files.length === 0) throw new Error(`no package.json or .eslintrc file found, checked up to: ${process.cwd()}`)

  const existingConfig = files.find((file) => file.endsWith('.eslintrc') || file.endsWith('.eslintrc.js'))
  if (existingConfig !== undefined) return { configPath: existingConfig, directory }

  const hasPackageJson = files.some((file) => file.endsWith('package.json'))
  if (hasPackageJson) {
    const writeResult = await writeFile(directory, '.eslintrc', JSON.stringify({ extends: ['@sunbeams'] }, null, 2))
    if (writeResult === true) return { configPath: path.join(directory, '.eslintrc'), directory }
    else throw new Error(`unable to create .eslintrc file: ${writeResult.message}`)
  }

  throw new Error('no package.json or .eslintrc file found and was unable to create one')
}
