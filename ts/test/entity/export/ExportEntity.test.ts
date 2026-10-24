

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SwissFederalRailwaysSbbSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ExportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE=TRUE.
  afterEach(liveDelay('SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SwissFederalRailwaysSbbSDK.test()
    const ent = testsdk.Export()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('export hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of SwissFederalRailwaysSbbSDK.test(offline).Export().stream('list')) { }
    }, /offline/)

    for await (const _item of SwissFederalRailwaysSbbSDK.test(offline).Export()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = SwissFederalRailwaysSbbSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Export().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of SwissFederalRailwaysSbbSDK.test().Export().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new SwissFederalRailwaysSbbSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Export().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Export().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = SwissFederalRailwaysSbbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Export().list({"exclude":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'export.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"export","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /catalog/datasets/ist-daten-sbb/exports/json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"exclude","or":"exclude","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"de","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"refine","or":"refine","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"where","or":"where","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/catalog/datasets/ist-daten-sbb/exports/json","q":{"$action":"json"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"catalog"},{"lit":"datasets"},{"lit":"ist-daten-sbb"},{"lit":"exports"},{"lit":"json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /catalog/datasets/ist-daten-sbb/exports/csv","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":";","k":"query","n":"delimiter","or":"delimiter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"exclude","or":"exclude","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"de","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"refine","or":"refine","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"where","or":"where","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/catalog/datasets/ist-daten-sbb/exports/csv","q":{"$action":"csv"},"r":{},"rs":{"kind":"raw","media":"text/csv"},"s":[{"lit":"catalog"},{"lit":"datasets"},{"lit":"ist-daten-sbb"},{"lit":"exports"},{"lit":"csv"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"export","name__orig":"export","Name":"Export","name_":"export","name-":"export","NAME":"EXPORT","index$":0}, {"active":true,"entity":"export","key$":"BasicExportFlow","kind":"basic","name":"BasicExportFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"export_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"export_ref01","srcdatavar":"export_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-export_ref01"}}],"index$":1}]}, 'Export', {"GET /catalog/datasets/ist-daten-sbb/exports/json":{"protocol":"http","parameters":[{"name":"where","in":"query","description":"Filter expression for export","required":false,"schema":{"type":"string"},"index$":0},{"name":"refine","in":"query","description":"Refine export by specific field values","required":false,"schema":{"type":"string"},"index$":1},{"name":"exclude","in":"query","description":"Exclude from export by specific field values","required":false,"schema":{"type":"string"},"index$":2},{"name":"lang","in":"query","description":"Language for export (de, fr, it, en)","required":false,"schema":{"type":"string","enum":["de","fr","it","en"],"default":"de"},"index$":3}]},"GET /catalog/datasets/ist-daten-sbb/exports/csv":{"protocol":"http","parameters":[{"name":"where","in":"query","description":"Filter expression for export","required":false,"schema":{"type":"string"},"index$":0},{"name":"refine","in":"query","description":"Refine export by specific field values","required":false,"schema":{"type":"string"},"index$":1},{"name":"exclude","in":"query","description":"Exclude from export by specific field values","required":false,"schema":{"type":"string"},"index$":2},{"name":"delimiter","in":"query","description":"CSV delimiter character","required":false,"schema":{"type":"string","enum":[",",";","\t"],"default":";"},"index$":3},{"name":"lang","in":"query","description":"Language for export (de, fr, it, en)","required":false,"schema":{"type":"string","enum":["de","fr","it","en"],"default":"de"},"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let export_ref01_data = Object.values(setup.data.existing.export)[0] as any

    // LIST
    const export_ref01_ent = client.Export()
    const export_ref01_match: any = {}

    const export_ref01_list = (await export_ref01_ent.list(export_ref01_match)).map((e: any) => e.data())


    // LOAD
    const export_ref01_match_dt0: any = {}
    const export_ref01_data_dt0 = (await export_ref01_ent.load(export_ref01_match_dt0)).data()
    assert(null != export_ref01_data_dt0)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/export/ExportTestData.json')

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
    ['export01','export02','export03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SWISS_FEDERAL_RAILWAYS_SBB_TEST_EXPORT_ENTID': idmap,
    'SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE': 'FALSE',
    'SWISS_FEDERAL_RAILWAYS_SBB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SWISS_FEDERAL_RAILWAYS_SBB_TEST_EXPORT_ENTID']

  const live = 'TRUE' === env.SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SWISS_FEDERAL_RAILWAYS_SBB_TEST_EXPORT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new SwissFederalRailwaysSbbSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
