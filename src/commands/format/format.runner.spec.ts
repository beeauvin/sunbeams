/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FormatRunner } from './format.runner'
import { exec } from '../../utilities/exec.utility'

const CONSTANT_SETTINGS = [
  '--ignore-unknown',
  '--no-semi',
  '--single-quote',
  '--trailing-comma',
  'none',
  '--print-width',
  '120',
  '--loglevel',
  'warn'
]

jest.mock('../../utilities/exec.utility')

describe('FormatRunner', () => {
  describe('run', () => {
    afterEach(() => {
      jest.resetAllMocks()
    })

    it('should generate the correct command when no options are provided', async () => {
      const formatRunner = new FormatRunner({})
      const expectedArgs = [
        'prettier',
        '**/*',
        '!dist',
        '--write',
        ...CONSTANT_SETTINGS
      ]
      await formatRunner.run()
      expect(exec).toHaveBeenCalledWith('npx', expectedArgs)
    })

    it('should generate the correct command when the path option is provided', async () => {
      const formatRunner = new FormatRunner({ path: 'src' })
      const expectedArgs = [
        'prettier',
        'src/**/*',
        '!dist',
        '--write',
        ...CONSTANT_SETTINGS
      ]
      await formatRunner.run()
      expect(exec).toHaveBeenCalledWith('npx', expectedArgs)
    })

    it('should generate the correct command when the check option is set to true', async () => {
      const formatRunner = new FormatRunner({ check: true })
      const expectedArgs = [
        'prettier',
        '**/*',
        '!dist',
        '--check',
        ...CONSTANT_SETTINGS
      ]
      await formatRunner.run()
      expect(exec).toHaveBeenCalledWith('npx', expectedArgs)
    })

    it('should generate the correct command when both the path and check options are provided', async () => {
      const formatRunner = new FormatRunner({ path: 'src', check: true })
      const expectedArgs = [
        'prettier',
        'src/**/*',
        '!dist',
        '--check',
        ...CONSTANT_SETTINGS
      ]
      await formatRunner.run()
      expect(exec).toHaveBeenCalledWith('npx', expectedArgs)
    })

    it('should call exec with the correct command', async () => {
      const formatRunner = new FormatRunner({})
      await formatRunner.run()
      expect(exec).toHaveBeenCalledWith(expect.any(String), expect.any(Array))
    })

    it('should throw an error when the path option is not ascii', async () => {
      const formatRunner = new FormatRunner({ path: '🦄' })
      await expect(formatRunner.run()).rejects.toThrow('invalid path provided')
    })
  })
})
