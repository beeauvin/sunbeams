/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { execFile as cmd } from 'child_process'

export class ExecError extends Error {}

export async function exec(
  command: string,
  args: string[] = []
): Promise<string> {
  return await new Promise<string>((resolve, reject) => {
    cmd(command, args, (error, stdout) => {
      if (error != null) {
        if (stdout != null && stdout !== '') reject(stdout)
        else reject(new ExecError(error.message))
      } else {
        resolve(stdout)
      }
    })
  })
}
