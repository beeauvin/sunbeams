/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Command, CommandRunner, Option } from 'nest-commander'
import { FormatRunner } from '@sunbeams/format'
import type { FormatRunnerFlagValues } from '@sunbeams/format'

@Command({
  name: 'format',
  aliases: ['fmt'],
  ...FormatRunner.Metadata
})
export class FormatCommand extends CommandRunner {
  async run(args: string[], options: FormatRunnerFlagValues): Promise<void> {
    await new FormatRunner({ path: args[0], ...options }).run()
  }

  @Option(FormatRunner.Flags.Check)
  check(value: boolean): boolean {
    return value
  }
}
