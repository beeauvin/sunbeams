/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { exec } from 'child_process'

export async function run(command: string): Promise<string> {
  return await new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderror) => {
      if (error != null) {
        console.error(error.message)
        reject(error.message)
      }

      if (stderror != null) {
        console.log(stderror)
        resolve(stderror)
      }

      console.log(stdout)
      resolve(stdout)
    })
  })
}
