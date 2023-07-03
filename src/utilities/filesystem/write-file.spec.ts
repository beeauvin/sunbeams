/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import * as fs from 'fs'
import * as path from 'path'
import { writeFile } from './write-file'

jest.mock('fs', () => ({
  promises: {
    writeFile: jest.fn()
  }
}))

jest.mock('path')

describe('writeFile', () => {
  const directory = '/example'
  const filename = 'test.txt'
  const data = 'Hello, World!'

  beforeEach(() => {
    jest.spyOn(path, 'join').mockReturnValue(`${directory}/${filename}`)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should write the file and return true on success', async () => {
    jest.spyOn(fs.promises, 'writeFile').mockResolvedValue(undefined)

    const result = await writeFile(directory, filename, data)

    expect(path.join).toHaveBeenCalledWith(directory, filename)
    expect(fs.promises.writeFile).toHaveBeenCalledWith(`${directory}/${filename}`, data, 'utf-8')
    expect(result).toBe(true)
  })

  it('should return an Error object when there is an error', async () => {
    const error = new Error('File write error')
    jest.spyOn(fs.promises, 'writeFile').mockRejectedValue(error)

    const result = await writeFile(directory, filename, data)

    expect(path.join).toHaveBeenCalledWith(directory, filename)
    expect(fs.promises.writeFile).toHaveBeenCalledWith(`${directory}/${filename}`, data, 'utf-8')
    expect(result).toBeInstanceOf(Error)
    expect(result).toEqual(error)
  })
})
