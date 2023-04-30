/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import * as index from './index'
import { findFilesInDirectory } from './find-files-in-directory'
import { recursivelyFindFilesUp } from './recursively-find-files-up'
import { writeFile } from './write-file'

describe('filesystem', () => {
  it('should export findFilesInDirectory', () => {
    expect(index.findFilesInDirectory).toBeDefined()
    expect(index.findFilesInDirectory).toBe(findFilesInDirectory)
  })

  it('should export recursivelyFindFilesUp', () => {
    expect(index.recursivelyFindFilesUp).toBeDefined()
    expect(index.recursivelyFindFilesUp).toBe(recursivelyFindFilesUp)
  })

  it('should export writeFile', () => {
    expect(index.writeFile).toBeDefined()
    expect(index.writeFile).toBe(writeFile)
  })
})
