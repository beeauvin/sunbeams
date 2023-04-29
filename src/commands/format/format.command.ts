/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { CommandRunner, Option } from 'nest-commander'

import { FormatRunner } from './format.runner'
import type { FormatRunnerFlagValues } from './format.runner'

export class FormatCommand extends CommandRunner {
  async run(args: string[], options: FormatRunnerFlagValues): Promise<void> {
    try {
      await new FormatRunner({ path: args[0], ...options }).run()
    } catch (error) {
      console.error(error.message)
      process.exit(1)
    }
  }

  @Option(FormatRunner.Flags.Check)
  check(value: boolean): boolean {
    return value
  }
}
