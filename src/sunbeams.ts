#!/usr/bin/env node
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { CommandFactory } from 'nest-commander'
import { CommandsModule } from './commands/commands.module'

async function bootstrap(): Promise<void> {
  await CommandFactory.run(CommandsModule)
}

void bootstrap()
