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
