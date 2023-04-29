/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Module } from '@nestjs/common'
import { DefaultCommand } from './default.command'
import { HappyCommand } from './happy.command'
import { SunshineCommand } from './sunshine.command'
import { LintCommand } from './lint.command'
import { FormatCommandProvider } from './format/format.provider'

@Module({
  providers: [
    DefaultCommand,
    LintCommand,
    FormatCommandProvider,
    HappyCommand,
    SunshineCommand
  ]
})
export class CommandsModule {}
