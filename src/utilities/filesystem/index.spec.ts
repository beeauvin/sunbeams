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
