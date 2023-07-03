/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Command, CommandRunner, Option } from 'nest-commander'

import { LintRunner } from './lint.runner'
import type { LintRunnerFlagValues } from './lint.runner'

@Command({
  name: 'lint',
  ...LintRunner.Metadata
})
export class LintCommand extends CommandRunner {
  async run(args: string[], options: LintRunnerFlagValues): Promise<void> {
    try {
      await new LintRunner({ ...options }).run()
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  }

  @Option(LintRunner.Flags.Fix)
  fix(value: boolean): boolean {
    return value
  }
}
