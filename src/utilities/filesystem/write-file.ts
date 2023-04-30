import * as fs from 'fs'
import * as path from 'path'

export async function writeFile(directory: string, filename: string, data: string): Promise<true | Error> {
  try {
    await fs.promises.writeFile(path.join(directory, filename), data, 'utf-8')
    return true
  } catch (error) {
    return error
  }
}
