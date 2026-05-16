
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SwissFederalRailwaysSbbSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await SwissFederalRailwaysSbbSDK.test()
    equal(null !== testsdk, true)
  })

})
