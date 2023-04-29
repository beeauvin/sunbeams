/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import 'jest-extended'

import { ExecError, exec } from './format.exec'

describe('FormatExec', () => {
  describe('exec', () => {
    it('should execute command and resolve with stdout', async () => {
      const command = 'echo'
      const args = ['hello world']
      await expect(exec(command, args)).resolves.toBe('hello world\n')
    })

    it('should execute command and reject with an ExecError on failure', async () => {
      const command = 'this-command-does-not-exist'
      await expect(exec(command)).rejects.toEqual(expect.any(ExecError))
    })

    it('should set the error message in the ExecError object', async () => {
      const command = 'this-command-does-not-exist /dev/null'
      const expectedError = new ExecError(
        'spawn this-command-does-not-exist /dev/null ENOENT'
      )
      await expect(exec(command)).rejects.toEqual(expectedError)
    })
  })
})
