"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "export",
        "accessor": "Export",
        "op": "list",
        "method": "GET",
        "path": "/catalog/datasets/ist-daten-sbb/exports/json",
        "action": "json",
        "args": [],
        "select": {
            "exclude": "v1",
            "lang": "de",
            "refine": "v1",
            "where": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "where",
            "refine",
            "exclude",
            "lang"
        ],
        "queryArgs": [
            {
                "name": "exclude",
                "wire": "exclude"
            },
            {
                "name": "lang",
                "wire": "lang"
            },
            {
                "name": "refine",
                "wire": "refine"
            },
            {
                "name": "where",
                "wire": "where"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {}
        ],
        "idField": "id"
    },
    {
        "entity": "export",
        "accessor": "Export",
        "op": "load",
        "method": "GET",
        "path": "/catalog/datasets/ist-daten-sbb/exports/csv",
        "action": "csv",
        "args": [],
        "select": {
            "delimiter": ";",
            "exclude": "v1",
            "lang": "de",
            "refine": "v1",
            "where": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "text/csv"
        ],
        "query": [
            "where",
            "refine",
            "exclude",
            "delimiter",
            "lang"
        ],
        "queryArgs": [
            {
                "name": "delimiter",
                "wire": "delimiter"
            },
            {
                "name": "exclude",
                "wire": "exclude"
            },
            {
                "name": "lang",
                "wire": "lang"
            },
            {
                "name": "refine",
                "wire": "refine"
            },
            {
                "name": "where",
                "wire": "where"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "record",
        "accessor": "Record",
        "op": "list",
        "method": "GET",
        "path": "/catalog/datasets/ist-daten-sbb/records",
        "args": [],
        "select": {
            "exclude": "v1",
            "lang": "de",
            "limit": 10,
            "offset": 0,
            "order_by": "v1",
            "refine": "v1",
            "select": "v1",
            "where": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "limit",
            "offset",
            "where",
            "order_by",
            "select",
            "refine",
            "exclude",
            "lang"
        ],
        "queryArgs": [
            {
                "name": "exclude",
                "wire": "exclude"
            },
            {
                "name": "lang",
                "wire": "lang"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "offset",
                "wire": "offset"
            },
            {
                "name": "order_by",
                "wire": "order_by"
            },
            {
                "name": "refine",
                "wire": "refine"
            },
            {
                "name": "select",
                "wire": "select"
            },
            {
                "name": "where",
                "wire": "where"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "total_count": 1,
            "results": [
                {
                    "id": "x",
                    "betriebstag": "2026-01-01",
                    "fahrt_bezeichner": "x",
                    "betreiber_id": "x",
                    "betreiber_name": "x",
                    "produkt_id": "x",
                    "linien_id": "x",
                    "linien_text": "x",
                    "verkehrsmittel_text": "x",
                    "haltestellen_name": "x",
                    "ankunftszeit_soll": "2026-01-01T00:00:00Z",
                    "ankunftszeit_ist": "2026-01-01T00:00:00Z",
                    "abfahrtszeit_soll": "2026-01-01T00:00:00Z",
                    "abfahrtszeit_ist": "2026-01-01T00:00:00Z",
                    "durchfahrt": true,
                    "faellt_aus": true
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map