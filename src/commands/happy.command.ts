/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Command, CommandRunner } from 'nest-commander'

@Command({
  name: 'happy',
  description: 'a little something to brighten your day'
})
export class HappyCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log('hey!')
    console.log("you're hella awesome!")
    console.log('thanks for being you! :D')
    console.log('...and remember...')
    console.log('...when things get tough...')
    console.log("or even when they don't...")
    console.log('be gentle with yourself. <3')
    console.log('be -nice- to yourself. <3')
    console.log("you're doing the best you can")
    console.log("even if it doesn't feel like it")
    console.log("and that's something to be proud of.")
    console.log('...')
    console.log('ok, bye! :)')
  }
}
