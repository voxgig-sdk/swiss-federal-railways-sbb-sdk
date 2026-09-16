

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SwissFederalRailwaysSbbSDK, BaseFeature, stdutil } from '../../..'

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'export.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"export","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"exclude","orig":"exclude","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"de","kind":"query","name":"lang","orig":"lang","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"refine","orig":"refine","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"where","orig":"where","reqd":false,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /catalog/datasets/ist-daten-sbb/exports/json","json":"{\"operationId\":\"exportJson\",\"parameters\":[{\"description\":\"Filter expression for export\",\"in\":\"query\",\"name\":\"where\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Refine export by specific field values\",\"in\":\"query\",\"name\":\"refine\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Exclude from export by specific field values\",\"in\":\"query\",\"name\":\"exclude\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Language for export (de, fr, it, en)\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"de\",\"enum\":[\"de\",\"fr\",\"it\",\"en\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"JSON export file\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"429\":{\"description\":\"Too many requests\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/catalog/datasets/ist-daten-sbb/exports/json","segments":[{"lit":"catalog"},{"lit":"datasets"},{"lit":"ist-daten-sbb"},{"lit":"exports"},{"lit":"json"}],"select":{"$action":"json","exist":["exclude","lang","refine","where"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":";","kind":"query","name":"delimiter","orig":"delimiter","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"exclude","orig":"exclude","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"de","kind":"query","name":"lang","orig":"lang","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"refine","orig":"refine","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"where","orig":"where","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /catalog/datasets/ist-daten-sbb/exports/csv","json":"{\"operationId\":\"exportCsv\",\"parameters\":[{\"description\":\"Filter expression for export\",\"in\":\"query\",\"name\":\"where\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Refine export by specific field values\",\"in\":\"query\",\"name\":\"refine\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Exclude from export by specific field values\",\"in\":\"query\",\"name\":\"exclude\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"CSV delimiter character\",\"in\":\"query\",\"name\":\"delimiter\",\"required\":false,\"schema\":{\"default\":\";\",\"enum\":[\",\",\";\",\"\\t\"],\"type\":\"string\"}},{\"description\":\"Language for export (de, fr, it, en)\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"de\",\"enum\":[\"de\",\"fr\",\"it\",\"en\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"text/csv\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"CSV export file\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"429\":{\"description\":\"Too many requests\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/catalog/datasets/ist-daten-sbb/exports/csv","segments":[{"lit":"catalog"},{"lit":"datasets"},{"lit":"ist-daten-sbb"},{"lit":"exports"},{"lit":"csv"}],"select":{"$action":"csv","exist":["delimiter","exclude","lang","refine","where"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"export","name__orig":"export","Name":"Export","name_":"export","name-":"export","NAME":"EXPORT","index$":0}, {"active":true,"entity":"export","key$":"BasicExportFlow","kind":"basic","name":"BasicExportFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"export_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"export_ref01","srcdatavar":"export_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-export_ref01"}}],"index$":1}]}, 'Export')
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
  
