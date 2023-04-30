/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Command, CommandRunner } from 'nest-commander'

const STAR = '☀️'

@Command({ name: 'sunshine', description: STAR.repeat(10) })
export class SunshineCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log(STAR.repeat(50))
    console.log(STAR, 'you are my sunshine!')
    console.log(STAR, 'my only sunshine!')
    console.log(STAR, 'you make me haaaaaappy!! :)')
    console.log(STAR, 'when skies are gray... :(')
    console.log(STAR, '...gray skies are totally cool too though! :)')
    console.log(STAR.repeat(50))
  }
}
