/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Module } from '@nestjs/common'
import { DefaultCommand } from './default.command'
import { HappyCommand } from './happy.command'
import { SunshineCommand } from './sunshine.command'
import { FormatModule } from './format/format.module'
import { LintModule } from './lint/lint.module'

@Module({
  imports: [FormatModule, LintModule],
  providers: [DefaultCommand, HappyCommand, SunshineCommand]
})
export class CommandsModule {}
