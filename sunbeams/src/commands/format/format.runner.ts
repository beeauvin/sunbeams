/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import * as path from 'path'

import { exec } from '../../utilities/exec.utility'
import validator from 'validator'

export interface FormatRunnerFlagValues {
  check: boolean
}

export interface FormatRunnerOptions {
  path?: string
  check?: boolean
}

export class FormatRunner {
  static readonly Metadata = {
    arguments: '[path]',
    description: 'formatting to brighten your day'
  }

  static readonly Flags = {
    Check: {
      flags: '-c, --check',
      description: 'check if formatting is correct'
    }
  }

  constructor(private readonly options: FormatRunnerOptions) {}

  public async run(): Promise<void> {
    const { path: inputPath, check } = this.options

    if (inputPath != null && !validator.isAscii(inputPath)) {
      throw new Error('invalid path provided')
    }

    const include = inputPath != null ? `${path.normalize(inputPath)}/**/*` : '**/*'
    const exclude = ['!dist', '!coverage']

    const write = [`--${check === true ? 'check' : 'write'}`, '--ignore-unknown']
    const formatting = ['--no-semi', '--single-quote', '--trailing-comma', 'none', '--print-width', '120']
    const logging = ['--loglevel', 'warn']

    const args = ['prettier', include, ...exclude, ...write, ...formatting, ...logging]
    await exec('npx', args)
  }
}
