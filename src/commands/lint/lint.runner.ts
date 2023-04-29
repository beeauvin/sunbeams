/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { createEslintConfigIfNeeded } from './lint.fs'
import { exec } from './lint.exec'

export interface LintRunnerFlagValues {
  fix: boolean
}

export interface LintRunnerOptions {
  fix?: boolean
}

export class LintRunner {
  static readonly Metadata = {
    description: 'linting to brighten your day'
  }

  static readonly Flags = {
    Fix: {
      flags: '-f, --fix',
      description: 'attempt to fix linting errors'
    }
  }

  constructor(private readonly options: LintRunnerOptions) {}

  public async run(): Promise<void> {
    const { fix } = this.options

    const { configPath, directory } = await createEslintConfigIfNeeded()

    const exclude = '--ignore-pattern "dist"'
    const config = `--config ${configPath}`
    const attemptFix = fix === true ? '--fix' : ''
    const color = '--color'

    const command = `eslint ${directory} ${exclude} ${config} ${attemptFix} ${color}`
    await exec(command)
  }
}
