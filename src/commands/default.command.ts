/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { CommandRunner, Option, RootCommand } from 'nest-commander'

interface DefaultCommandOptions {
  version?: string
}

@RootCommand({})
export class DefaultCommand extends CommandRunner {
  async run(_: string[], options: DefaultCommandOptions): Promise<void> {
    if (options.version != null) console.log(options.version)
    else this.command.help()
  }

  @Option({ flags: '-v, --version', description: 'outputs the version number' })
  version(): string {
    return 'v0.6.0'
  }
}
