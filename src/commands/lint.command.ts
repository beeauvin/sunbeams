/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Command, CommandRunner } from 'nest-commander'
import { run } from '../utilities'

@Command({
  name: 'lint',
  arguments: '[path]',
  description: 'ALPHA! linting to brighten your day'
})
export class LintCommand extends CommandRunner {
  async run(args: string[]): Promise<void> {
    const [path] = args
    
    const include = path ?? '.'
    const exclude = '--ignore-pattern "dist"'

    const color = '--color'
    const config = '--config ./node_modules/sunbeams/.eslintrc.js'

    const command = `eslint ${include} ${exclude} ${color} ${config}`
    await run(command)
  }
}
