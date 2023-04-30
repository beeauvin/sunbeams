import { recursivelyFindFilesUp } from './recursively-find-files-up'
import { findFilesInDirectory } from './find-files-in-directory'
import * as path from 'path'

jest.mock('path')
jest.mock('./find-files-in-directory', () => ({
  findFilesInDirectory: jest.fn()
}))

describe('recursivelyFindFilesUp', () => {
  const findFilesInDirectoryMock = findFilesInDirectory as jest.MockedFunction<
    typeof findFilesInDirectory
  >
  const startDirectory = '/example/start'
  const parentDirectory = '/example'
  const rootDirectory = '/'
  const fileToSearch = 'target.txt'

  beforeEach(() => {
    jest
      .spyOn(path, 'dirname')
      .mockImplementation((dir) =>
        dir === startDirectory ? rootDirectory : dir
      )
    jest.spyOn(path, 'resolve').mockReturnValue(rootDirectory)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should find files in the current directory', () => {
    findFilesInDirectoryMock.mockReturnValueOnce([fileToSearch])

    const result = recursivelyFindFilesUp([fileToSearch], startDirectory)

    expect(result).toEqual({ files: [fileToSearch], directory: startDirectory })
    expect(findFilesInDirectoryMock).toHaveBeenCalledWith(
      [fileToSearch],
      startDirectory
    )
    expect(path.dirname).not.toHaveBeenCalled()
  })

  it('should find files in a parent directory', () => {
    findFilesInDirectoryMock
      .mockReturnValueOnce([])
      .mockReturnValueOnce([fileToSearch])
    jest
      .spyOn(path, 'dirname')
      .mockImplementation((dir) =>
        dir === startDirectory ? parentDirectory : rootDirectory
      )

    const result = recursivelyFindFilesUp([fileToSearch], startDirectory)

    expect(result).toEqual({
      files: [fileToSearch],
      directory: parentDirectory
    })
    expect(findFilesInDirectoryMock).toHaveBeenCalledWith(
      [fileToSearch],
      startDirectory
    )
    expect(findFilesInDirectoryMock).toHaveBeenCalledWith(
      [fileToSearch],
      parentDirectory
    )
    expect(path.dirname).toHaveBeenCalledWith(startDirectory)
  })

  it('should return an empty array if the file is not found', () => {
    findFilesInDirectoryMock.mockReturnValue([])

    const result = recursivelyFindFilesUp([fileToSearch], startDirectory)

    expect(result).toEqual({ files: [], directory: rootDirectory })
    expect(findFilesInDirectoryMock).toHaveBeenCalledWith(
      [fileToSearch],
      startDirectory
    )
    expect(path.dirname).toHaveBeenCalledWith(startDirectory)
  })
})
