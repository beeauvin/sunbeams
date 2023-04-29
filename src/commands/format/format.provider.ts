/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FormatCommand } from './format.command'
import { FormatRunner } from './format.runner'
import { Command } from 'nest-commander'

@Command({
  name: 'format',
  aliases: ['fmt'],
  ...FormatRunner.Metadata
})
export class FormatCommandProvider extends FormatCommand {}
