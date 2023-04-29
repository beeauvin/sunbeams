/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { LintCommand } from './lint.command'
import { LintRunner } from './lint.runner'
import { Command } from 'nest-commander'

@Command({
  name: 'lint',
  ...LintRunner.Metadata
})
export class LintCommandProvider extends LintCommand {}
