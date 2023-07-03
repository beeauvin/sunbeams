/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import * as fs from 'fs'
import * as path from 'path'

export function findFilesInDirectory(filesToSearch: string[], directory: string): string[] {
  return filesToSearch.filter((file) => fs.existsSync(path.join(directory, file)))
}
