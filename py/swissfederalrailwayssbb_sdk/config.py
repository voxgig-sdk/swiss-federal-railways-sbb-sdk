# SwissFederalRailwaysSbb SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "SwissFederalRailwaysSbb",
            "slug": "swiss-federal-railways-sbb",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://data.sbb.ch/api/explore/v2.1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "export": {},
                "record": {},
            },
        },
        "entity": {
      "export": {
        "fields": [],
        "name": "export",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "exclude",
                      "orig": "exclude",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "de",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine",
                      "orig": "refine",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "where",
                      "orig": "where",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/catalog/datasets/ist-daten-sbb/exports/json",
                "parts": [
                  "catalog",
                  "datasets",
                  "ist-daten-sbb",
                  "exports",
                  "json",
                ],
                "select": {
                  "$action": "json",
                  "exist": [
                    "exclude",
                    "lang",
                    "refine",
                    "where",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": ";",
                      "kind": "query",
                      "name": "delimiter",
                      "orig": "delimiter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "exclude",
                      "orig": "exclude",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "de",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine",
                      "orig": "refine",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "where",
                      "orig": "where",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/catalog/datasets/ist-daten-sbb/exports/csv",
                "parts": [
                  "catalog",
                  "datasets",
                  "ist-daten-sbb",
                  "exports",
                  "csv",
                ],
                "select": {
                  "$action": "csv",
                  "exist": [
                    "delimiter",
                    "exclude",
                    "lang",
                    "refine",
                    "where",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "record": {
        "fields": [
          {
            "name": "abfahrtszeit_ist",
            "short": "Actual departure time",
            "type": "`$STRING`",
          },
          {
            "name": "abfahrtszeit_soll",
            "short": "Scheduled departure time",
            "type": "`$STRING`",
          },
          {
            "name": "ankunftszeit_ist",
            "short": "Actual arrival time",
            "type": "`$STRING`",
          },
          {
            "name": "ankunftszeit_soll",
            "short": "Scheduled arrival time",
            "type": "`$STRING`",
          },
          {
            "name": "betreiber_id",
            "short": "Operator ID",
            "type": "`$STRING`",
          },
          {
            "name": "betreiber_name",
            "short": "Operator name",
            "type": "`$STRING`",
          },
          {
            "name": "betriebstag",
            "short": "Operating day",
            "type": "`$STRING`",
          },
          {
            "name": "durchfahrt",
            "short": "Through passage (no stop)",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "faellt_aus",
            "short": "Cancelled",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "fahrt_bezeichner",
            "short": "Trip identifier",
            "type": "`$STRING`",
          },
          {
            "name": "haltestellen_name",
            "short": "Station name",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique record identifier",
            "type": "`$STRING`",
          },
          {
            "name": "linien_id",
            "short": "Line ID",
            "type": "`$STRING`",
          },
          {
            "name": "linien_text",
            "short": "Line text/number",
            "type": "`$STRING`",
          },
          {
            "name": "produkt_id",
            "short": "Product ID (train type)",
            "type": "`$STRING`",
          },
          {
            "name": "verkehrsmittel_text",
            "short": "Transport type",
            "type": "`$STRING`",
          },
        ],
        "name": "record",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "exclude",
                      "orig": "exclude",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "de",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine",
                      "orig": "refine",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "select",
                      "orig": "select",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "where",
                      "orig": "where",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/catalog/datasets/ist-daten-sbb/records",
                "parts": [
                  "catalog",
                  "datasets",
                  "ist-daten-sbb",
                  "records",
                ],
                "select": {
                  "exist": [
                    "exclude",
                    "lang",
                    "limit",
                    "offset",
                    "order_by",
                    "refine",
                    "select",
                    "where",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
