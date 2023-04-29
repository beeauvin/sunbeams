/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { exec as cmd } from 'child_process'

export async function exec(command: string): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    cmd(command, (error, stdout) => {
      if (error != null) {
        // Eslint prints to stdout, not stderr, when it fails
        if (stdout != null) reject(stdout)
        else reject(error)
      } else {
        console.log(stdout)
        resolve()
      }
    })
  })
}
