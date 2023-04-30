import { findFilesInDirectory } from './find-files-in-directory'
import * as path from 'path'

export interface IRecursivelyFindFilesUpResult {
  files: string[]
  directory: string
}

export function recursivelyFindFilesUp(
  filesToSearch: string[],
  directory: string,
  root: string = path.resolve('/')
): IRecursivelyFindFilesUpResult {
  const files = findFilesInDirectory(filesToSearch, directory)
  if (files.length > 0) return { files, directory }
  else if (directory === root) return { files: [], directory: root }
  else return recursivelyFindFilesUp(filesToSearch, path.dirname(directory), root)
}
