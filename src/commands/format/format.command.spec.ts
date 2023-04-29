/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FormatCommand } from './format.command'
import { FormatRunner } from './format.runner'

jest.mock('./format.runner')

describe('FormatCommand', () => {
  describe('run', () => {
    const args = ['path/to/file']
    const options = { check: true }

    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('creates a new FormatRunner with the correct options', async () => {
      const command = new FormatCommand()
      await command.run(args, options)

      expect(FormatRunner).toHaveBeenCalledWith({
        path: 'path/to/file',
        check: true
      })
    })

    it('delegates to the run method of the created FormatRunner', async () => {
      const mockRun = jest.fn()
      jest.spyOn(FormatRunner.prototype, 'run').mockImplementation(mockRun)

      const command = new FormatCommand()
      await command.run(args, options)

      expect(mockRun).toHaveBeenCalled()
    })

    it('logs and exits when FormatRunner throws an error', async () => {
      const mockError = new Error('test error')
      jest.spyOn(console, 'error').mockImplementation(jest.fn())
      jest.spyOn(process, 'exit').mockImplementation(((code: number) => {
        expect(code).toBe(1)
      }) as never)

      jest.spyOn(FormatRunner.prototype, 'run').mockRejectedValueOnce(mockError)

      const command = new FormatCommand()
      await command.run([], options)

      expect(console.error).toHaveBeenCalledWith('test error')
      expect(process.exit).toHaveBeenCalledWith(1)
    })
  })

  describe('check', () => {
    it('returns the value of the check flag', () => {
      const command = new FormatCommand()
      const result = command.check(true)

      expect(result).toBe(true)
    })
  })
})
