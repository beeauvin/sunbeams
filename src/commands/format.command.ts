/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Command, CommandRunner } from 'nest-commander'
import { run } from '../utilities'

@Command({
  name: 'format',
  arguments: '[path]',
  aliases: ['fmt'],
  description: 'ALPHA! formatting to brighten your day'
})
export class FormatCommand extends CommandRunner {
  async run(args: string[]): Promise<void> {
    const [path] = args
    
    const include = (path != null) ? `"${path}/**/*"` : '"**/*"'
    const exclude = '"!dist"'

    const write = '--write --ignore-unknown'
    const formatting = '--no-semi --single-quote --trailing-comma none'
    const logging = '--loglevel warn'

    const command = `prettier ${include} ${exclude} ${write} ${formatting} ${logging}`
    await run(command)
  }
}
