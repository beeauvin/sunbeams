/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

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
