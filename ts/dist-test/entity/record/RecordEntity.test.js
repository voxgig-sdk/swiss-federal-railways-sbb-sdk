"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('RecordEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SwissFederalRailwaysSbbSDK.test();
        const ent = testsdk.Record();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('record hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.SwissFederalRailwaysSbbSDK.test(offline).Record().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.SwissFederalRailwaysSbbSDK.test(offline).Record()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.SwissFederalRailwaysSbbSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Record().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.SwissFederalRailwaysSbbSDK.test().Record().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.SwissFederalRailwaysSbbSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Record().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Record().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.SwissFederalRailwaysSbbSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Record().list({ "exclude": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'record.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "abfahrtszeit_ist": { "a": true, "fo": "date-time", "h": "Abfahrtszeit Ist", "n": "abfahrtszeit_ist", "r": false, "sh": "Actual departure time", "t": "`$STRING`", "key$": "abfahrtszeit_ist", "index$": 0 }, "abfahrtszeit_soll": { "a": true, "fo": "date-time", "h": "Abfahrtszeit Soll", "n": "abfahrtszeit_soll", "r": false, "sh": "Scheduled departure time", "t": "`$STRING`", "key$": "abfahrtszeit_soll", "index$": 1 }, "ankunftszeit_ist": { "a": true, "fo": "date-time", "h": "Ankunftszeit Ist", "n": "ankunftszeit_ist", "r": false, "sh": "Actual arrival time", "t": "`$STRING`", "key$": "ankunftszeit_ist", "index$": 2 }, "ankunftszeit_soll": { "a": true, "fo": "date-time", "h": "Ankunftszeit Soll", "n": "ankunftszeit_soll", "r": false, "sh": "Scheduled arrival time", "t": "`$STRING`", "key$": "ankunftszeit_soll", "index$": 3 }, "betreiber_id": { "a": true, "h": "Betreiber Id", "n": "betreiber_id", "r": false, "sh": "Operator ID", "t": "`$STRING`", "key$": "betreiber_id", "index$": 4 }, "betreiber_name": { "a": true, "h": "Betreiber Name", "n": "betreiber_name", "r": false, "sh": "Operator name", "t": "`$STRING`", "key$": "betreiber_name", "index$": 5 }, "betriebstag": { "a": true, "fo": "date", "h": "Betriebstag", "n": "betriebstag", "r": false, "sh": "Operating day", "t": "`$STRING`", "key$": "betriebstag", "index$": 6 }, "durchfahrt": { "a": true, "h": "Durchfahrt", "n": "durchfahrt", "r": false, "sh": "Through passage (no stop)", "t": "`$BOOLEAN`", "key$": "durchfahrt", "index$": 7 }, "faellt_aus": { "a": true, "h": "Faellt Aus", "n": "faellt_aus", "r": false, "sh": "Cancelled", "t": "`$BOOLEAN`", "key$": "faellt_aus", "index$": 8 }, "fahrt_bezeichner": { "a": true, "h": "Fahrt Bezeichner", "n": "fahrt_bezeichner", "r": false, "sh": "Trip identifier", "t": "`$STRING`", "key$": "fahrt_bezeichner", "index$": 9 }, "haltestellen_name": { "a": true, "h": "Haltestellen Name", "n": "haltestellen_name", "r": false, "sh": "Station name", "t": "`$STRING`", "key$": "haltestellen_name", "index$": 10 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique record identifier", "t": "`$STRING`", "key$": "id", "index$": 11 }, "linien_id": { "a": true, "h": "Linien Id", "n": "linien_id", "r": false, "sh": "Line ID", "t": "`$STRING`", "key$": "linien_id", "index$": 12 }, "linien_text": { "a": true, "h": "Linien Text", "n": "linien_text", "r": false, "sh": "Line text/number", "t": "`$STRING`", "key$": "linien_text", "index$": 13 }, "produkt_id": { "a": true, "h": "Produkt Id", "n": "produkt_id", "r": false, "sh": "Product ID (train type)", "t": "`$STRING`", "key$": "produkt_id", "index$": 14 }, "verkehrsmittel_text": { "a": true, "h": "Verkehrsmittel Text", "n": "verkehrsmittel_text", "r": false, "sh": "Transport type", "t": "`$STRING`", "key$": "verkehrsmittel_text", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "record", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /catalog/datasets/ist-daten-sbb/records", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "exclude", "or": "exclude", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "de", "k": "query", "n": "lang", "or": "lang", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "refine", "or": "refine", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "select", "or": "select", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "where", "or": "where", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/catalog/datasets/ist-daten-sbb/records", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "catalog" }, { "lit": "datasets" }, { "lit": "ist-daten-sbb" }, { "lit": "records" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "record", "name__orig": "record", "Name": "Record", "name_": "record", "name-": "record", "NAME": "RECORD", "index$": 1 }, { "active": true, "entity": "record", "key$": "BasicRecordFlow", "kind": "basic", "name": "BasicRecordFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "record_ref01" } }], "index$": 0 }] }, 'Record', { "GET /catalog/datasets/ist-daten-sbb/records": { "protocol": "http", "parameters": [{ "name": "limit", "in": "query", "description": "Number of records to return", "required": false, "schema": { "type": "integer", "default": 10, "minimum": 1, "maximum": 100 }, "index$": 0 }, { "name": "offset", "in": "query", "description": "Number of records to skip for pagination", "required": false, "schema": { "type": "integer", "default": 0, "minimum": 0 }, "index$": 1 }, { "name": "where", "in": "query", "description": "Filter expression for querying specific records", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "order_by", "in": "query", "description": "Field to order results by", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "select", "in": "query", "description": "Comma-separated list of fields to return", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "refine", "in": "query", "description": "Refine results by specific field values", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "exclude", "in": "query", "description": "Exclude results by specific field values", "required": false, "schema": { "type": "string" }, "index$": 6 }, { "name": "lang", "in": "query", "description": "Language for response (de, fr, it, en)", "required": false, "schema": { "type": "string", "enum": ["de", "fr", "it", "en"], "default": "de" }, "index$": 7 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let record_ref01_data = Object.values(setup.data.existing.record)[0];
        // LIST
        const record_ref01_ent = client.Record();
        const record_ref01_match = {};
        const record_ref01_list = (await record_ref01_ent.list(record_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/record/RecordTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SwissFederalRailwaysSbbSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['record01', 'record02', 'record03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SWISS_FEDERAL_RAILWAYS_SBB_TEST_RECORD_ENTID': idmap,
        'SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE': 'FALSE',
        'SWISS_FEDERAL_RAILWAYS_SBB_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['SWISS_FEDERAL_RAILWAYS_SBB_TEST_RECORD_ENTID'];
    const live = 'TRUE' === env.SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SWISS_FEDERAL_RAILWAYS_SBB_TEST_RECORD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.SwissFederalRailwaysSbbSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=RecordEntity.test.js.map