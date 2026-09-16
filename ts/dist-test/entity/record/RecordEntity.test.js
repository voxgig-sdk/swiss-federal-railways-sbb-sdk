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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SWISS_FEDERAL_RAILWAYS_SBB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'record.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "abfahrtszeit_ist", "req": false, "short": "Actual departure time", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "date-time", "name": "abfahrtszeit_soll", "req": false, "short": "Scheduled departure time", "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "date-time", "name": "ankunftszeit_ist", "req": false, "short": "Actual arrival time", "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "date-time", "name": "ankunftszeit_soll", "req": false, "short": "Scheduled arrival time", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "betreiber_id", "req": false, "short": "Operator ID", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "betreiber_name", "req": false, "short": "Operator name", "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "date", "name": "betriebstag", "req": false, "short": "Operating day", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "durchfahrt", "req": false, "short": "Through passage (no stop)", "type": "`$BOOLEAN`", "index$": 7 }, { "active": true, "name": "faellt_aus", "req": false, "short": "Cancelled", "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "fahrt_bezeichner", "req": false, "short": "Trip identifier", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "haltestellen_name", "req": false, "short": "Station name", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "id", "req": false, "short": "Unique record identifier", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "linien_id", "req": false, "short": "Line ID", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "linien_text", "req": false, "short": "Line text/number", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "produkt_id", "req": false, "short": "Product ID (train type)", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "verkehrsmittel_text", "req": false, "short": "Transport type", "type": "`$STRING`", "index$": 15 }], "id": { "field": "id", "name": "id" }, "name": "record", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "exclude", "orig": "exclude", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "de", "kind": "query", "name": "lang", "orig": "lang", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": 10, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "example": 0, "kind": "query", "name": "offset", "orig": "offset", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "kind": "query", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "kind": "query", "name": "refine", "orig": "refine", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "kind": "query", "name": "select", "orig": "select", "reqd": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "kind": "query", "name": "where", "orig": "where", "reqd": false, "type": "`$STRING`", "index$": 7 }] }, "contract": { "id": "GET /catalog/datasets/ist-daten-sbb/records", "json": "{\"operationId\":\"getRecords\",\"parameters\":[{\"description\":\"Number of records to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of records to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Filter expression for querying specific records\",\"in\":\"query\",\"name\":\"where\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Field to order results by\",\"in\":\"query\",\"name\":\"order_by\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of fields to return\",\"in\":\"query\",\"name\":\"select\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Refine results by specific field values\",\"in\":\"query\",\"name\":\"refine\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Exclude results by specific field values\",\"in\":\"query\",\"name\":\"exclude\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Language for response (de, fr, it, en)\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"de\",\"enum\":[\"de\",\"fr\",\"it\",\"en\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"results\":{\"items\":{\"properties\":{\"abfahrtszeit_ist\":{\"description\":\"Actual departure time\",\"format\":\"date-time\",\"type\":\"string\"},\"abfahrtszeit_soll\":{\"description\":\"Scheduled departure time\",\"format\":\"date-time\",\"type\":\"string\"},\"ankunftszeit_ist\":{\"description\":\"Actual arrival time\",\"format\":\"date-time\",\"type\":\"string\"},\"ankunftszeit_soll\":{\"description\":\"Scheduled arrival time\",\"format\":\"date-time\",\"type\":\"string\"},\"betreiber_id\":{\"description\":\"Operator ID\",\"type\":\"string\"},\"betreiber_name\":{\"description\":\"Operator name\",\"type\":\"string\"},\"betriebstag\":{\"description\":\"Operating day\",\"format\":\"date\",\"type\":\"string\"},\"durchfahrt\":{\"description\":\"Through passage (no stop)\",\"type\":\"boolean\"},\"faellt_aus\":{\"description\":\"Cancelled\",\"type\":\"boolean\"},\"fahrt_bezeichner\":{\"description\":\"Trip identifier\",\"type\":\"string\"},\"haltestellen_name\":{\"description\":\"Station name\",\"type\":\"string\"},\"id\":{\"description\":\"Unique record identifier\",\"type\":\"string\"},\"linien_id\":{\"description\":\"Line ID\",\"type\":\"string\"},\"linien_text\":{\"description\":\"Line text/number\",\"type\":\"string\"},\"produkt_id\":{\"description\":\"Product ID (train type)\",\"type\":\"string\"},\"verkehrsmittel_text\":{\"description\":\"Transport type\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_count\":{\"description\":\"Total number of records matching the query\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with SBB departure/arrival records\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"429\":{\"description\":\"Too many requests\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/catalog/datasets/ist-daten-sbb/records", "segments": [{ "lit": "catalog" }, { "lit": "datasets" }, { "lit": "ist-daten-sbb" }, { "lit": "records" }], "select": { "exist": ["exclude", "lang", "limit", "offset", "order_by", "refine", "select", "where"] }, "transform": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "record", "name__orig": "record", "Name": "Record", "name_": "record", "name-": "record", "NAME": "RECORD", "index$": 1 }, { "active": true, "entity": "record", "key$": "BasicRecordFlow", "kind": "basic", "name": "BasicRecordFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "record_ref01" } }], "index$": 0 }] }, 'Record');
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