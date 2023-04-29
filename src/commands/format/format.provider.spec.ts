/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FormatCommand } from './format.command'
import { FormatCommandProvider } from './format.provider'

describe('FormatCommandProvider', () => {
  it('extends FormatCommand', () => {
    expect(FormatCommandProvider.prototype instanceof FormatCommand).toBe(true)
  })
})
