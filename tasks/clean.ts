/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { promises as fs } from 'fs'

async function clean(): Promise<void> {
  await fs.rm('dist', { recursive: true, force: true })
}

void clean()
