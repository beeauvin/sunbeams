/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Command } from 'nest-commander'
import { FormatCommand as FormatCommandBase, FormatRunner } from '@sunbeams/format'

@Command({
  name: 'format',
  aliases: ['fmt'],
  ...FormatRunner.Metadata
})
export class FormatCommand extends FormatCommandBase {}
