/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { findFilesInDirectory } from './find-files-in-directory'
import * as fs from 'fs'

describe('findFilesInDirectory', () => {
  it('should return an array of strings containing the names of the files found', () => {
    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true)
    const files = ['testfileexists.json', 'otherfiledeosnt.ts']
    const result = findFilesInDirectory(files, './')
    expect(result).toBeInstanceOf(Array)
    expect(result).toContain('testfileexists.json')
    expect(result).not.toContain('otherfiledeosnt.ts')
  })

  it('should return an empty array if no files are found', () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(false)
    const files = ['testfiledoesnt.json', 'otherfiledeosnt.ts']
    const result = findFilesInDirectory(files, './')
    expect(result).toBeInstanceOf(Array)
    expect(result).toHaveLength(0)
  })
})
