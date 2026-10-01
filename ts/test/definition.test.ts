import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
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
      "lang": "v1",
      "refine": "v1",
      "where": "v1"
    },
    "headers": [],
    "query": [
      "where",
      "refine",
      "exclude",
      "lang"
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
      "delimiter": "v1",
      "exclude": "v1",
      "lang": "v1",
      "refine": "v1",
      "where": "v1"
    },
    "headers": [],
    "query": [
      "where",
      "refine",
      "exclude",
      "delimiter",
      "lang"
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
      "lang": "v1",
      "limit": "v1",
      "offset": "v1",
      "order_by": "v1",
      "refine": "v1",
      "select": "v1",
      "where": "v1"
    },
    "headers": [],
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
    "auth": null,
    "status": 200,
    "sample": {
      "total_count": 1,
      "results": [
        {
          "abfahrtszeit_ist": "2026-01-01T00:00:00Z",
          "abfahrtszeit_soll": "2026-01-01T00:00:00Z",
          "ankunftszeit_ist": "2026-01-01T00:00:00Z",
          "ankunftszeit_soll": "2026-01-01T00:00:00Z",
          "betreiber_id": "x",
          "betreiber_name": "x",
          "betriebstag": "2026-01-01",
          "durchfahrt": true,
          "faellt_aus": true,
          "fahrt_bezeichner": "x",
          "haltestellen_name": "x",
          "id": "x",
          "linien_id": "x",
          "linien_text": "x",
          "produkt_id": "x",
          "verkehrsmittel_text": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
