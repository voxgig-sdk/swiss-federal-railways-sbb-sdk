
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SwissFederalRailwaysSbbSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = SwissFederalRailwaysSbbSDK.test()
    equal(testsdk instanceof SwissFederalRailwaysSbbSDK, true,
      'SwissFederalRailwaysSbbSDK.test() must return a client synchronously')
  })

})
