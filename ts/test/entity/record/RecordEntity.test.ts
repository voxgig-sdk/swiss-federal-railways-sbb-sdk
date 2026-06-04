
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { SwissFederalRailwaysSbbSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('RecordEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SWISSFEDERALRAILWAYSSBB_TEST_LIVE=TRUE.
  afterEach(liveDelay('SWISSFEDERALRAILWAYSSBB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SwissFederalRailwaysSbbSDK.test()
    const ent = testsdk.Record()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE
    for (const op of ['list']) {
      if (maybeSkipControl(t, 'entityOp', 'record.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set SWISS_FEDERAL_RAILWAYS_SBB_TEST_RECORD_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let record_ref01_data = Object.values(setup.data.existing.record)[0] as any

    // LIST
    const record_ref01_ent = client.Record()
    const record_ref01_match: any = {}

    const record_ref01_list = await record_ref01_ent.list(record_ref01_match)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/record/RecordTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SwissFederalRailwaysSbbSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['record01','record02','record03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['SWISS_FEDERAL_RAILWAYS_SBB_TEST_RECORD_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'SWISS_FEDERAL_RAILWAYS_SBB_TEST_RECORD_ENTID': idmap,
    'SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE': 'FALSE',
    'SWISS_FEDERAL_RAILWAYS_SBB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SWISS_FEDERAL_RAILWAYS_SBB_TEST_RECORD_ENTID']

  const live = 'TRUE' === env.SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE

  if (live) {
    client = new SwissFederalRailwaysSbbSDK(merge([
      {
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SWISS_FEDERAL_RAILWAYS_SBB_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
