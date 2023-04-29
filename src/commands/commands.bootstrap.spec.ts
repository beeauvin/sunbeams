/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { CommandFactory } from 'nest-commander'
import { CommandsModule } from './commands.module'
import { bootstrap } from './commands.bootstrap'

describe('cli', () => {
  it('runs the CommandsModule', async () => {
    jest.spyOn(CommandFactory, 'run').mockImplementation(jest.fn())

    await bootstrap()

    expect(CommandFactory.run).toHaveBeenCalledWith(CommandsModule)
  })
})
