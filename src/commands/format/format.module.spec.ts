/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FormatCommandProvider } from './format.provider'
import { FormatModule } from './format.module'
import type { Provider } from '@nestjs/common'

describe('FormatModule', () => {
  it('registers the FormatCommandProvider', () => {
    const providers = Reflect.getMetadata('providers', FormatModule)
    const isRegistered = providers.some(
      (provider: Provider) => provider === FormatCommandProvider
    )

    expect(isRegistered).toBe(true)
  })
})
