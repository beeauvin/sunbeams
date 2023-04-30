import * as fs from 'fs'
import * as path from 'path'

export function findFilesInDirectory(
  filesToSearch: string[],
  directory: string
): string[] {
  return filesToSearch.filter((file) =>
    fs.existsSync(path.join(directory, file))
  )
}
