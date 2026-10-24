# SwissFederalRailwaysSbb SDK configuration

module SwissFederalRailwaysSbbConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "SwissFederalRailwaysSbb",
        "slug" => "swiss-federal-railways-sbb",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "now" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://data.sbb.ch/api/explore/v2.1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "export" => {},
          "record" => {},
        },
      },
      "entity" => {
        "export" => {
          "fields" => [],
          "name" => "export",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/catalog/datasets/ist-daten-sbb/exports/json",
                  "segments" => [
                    {
                      "lit" => "catalog",
                    },
                    {
                      "lit" => "datasets",
                    },
                    {
                      "lit" => "ist-daten-sbb",
                    },
                    {
                      "lit" => "exports",
                    },
                    {
                      "lit" => "json",
                    },
                  ],
                  "parts" => [
                    "catalog",
                    "datasets",
                    "ist-daten-sbb",
                    "exports",
                    "json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "exclude",
                        "orig" => "exclude",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "de",
                      },
                      {
                        "name" => "refine",
                        "orig" => "refine",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "where",
                        "orig" => "where",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "json",
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/catalog/datasets/ist-daten-sbb/exports/csv",
                  "segments" => [
                    {
                      "lit" => "catalog",
                    },
                    {
                      "lit" => "datasets",
                    },
                    {
                      "lit" => "ist-daten-sbb",
                    },
                    {
                      "lit" => "exports",
                    },
                    {
                      "lit" => "csv",
                    },
                  ],
                  "parts" => [
                    "catalog",
                    "datasets",
                    "ist-daten-sbb",
                    "exports",
                    "csv",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "delimiter",
                        "orig" => "delimiter",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => ";",
                      },
                      {
                        "name" => "exclude",
                        "orig" => "exclude",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "de",
                      },
                      {
                        "name" => "refine",
                        "orig" => "refine",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "where",
                        "orig" => "where",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "csv",
                  },
                  "response" => {
                    "kind" => "raw",
                    "media" => "text/csv",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "record" => {
          "fields" => [
            {
              "name" => "abfahrtszeit_ist",
              "title" => "Abfahrtszeit Ist",
              "type" => "`$STRING`",
              "short" => "Actual departure time",
              "format" => "date-time",
            },
            {
              "name" => "abfahrtszeit_soll",
              "title" => "Abfahrtszeit Soll",
              "type" => "`$STRING`",
              "short" => "Scheduled departure time",
              "format" => "date-time",
            },
            {
              "name" => "ankunftszeit_ist",
              "title" => "Ankunftszeit Ist",
              "type" => "`$STRING`",
              "short" => "Actual arrival time",
              "format" => "date-time",
            },
            {
              "name" => "ankunftszeit_soll",
              "title" => "Ankunftszeit Soll",
              "type" => "`$STRING`",
              "short" => "Scheduled arrival time",
              "format" => "date-time",
            },
            {
              "name" => "betreiber_id",
              "title" => "Betreiber Id",
              "type" => "`$STRING`",
              "short" => "Operator ID",
            },
            {
              "name" => "betreiber_name",
              "title" => "Betreiber Name",
              "type" => "`$STRING`",
              "short" => "Operator name",
            },
            {
              "name" => "betriebstag",
              "title" => "Betriebstag",
              "type" => "`$STRING`",
              "short" => "Operating day",
              "format" => "date",
            },
            {
              "name" => "durchfahrt",
              "title" => "Durchfahrt",
              "type" => "`$BOOLEAN`",
              "short" => "Through passage (no stop)",
            },
            {
              "name" => "faellt_aus",
              "title" => "Faellt Aus",
              "type" => "`$BOOLEAN`",
              "short" => "Cancelled",
            },
            {
              "name" => "fahrt_bezeichner",
              "title" => "Fahrt Bezeichner",
              "type" => "`$STRING`",
              "short" => "Trip identifier",
            },
            {
              "name" => "haltestellen_name",
              "title" => "Haltestellen Name",
              "type" => "`$STRING`",
              "short" => "Station name",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Unique record identifier",
            },
            {
              "name" => "linien_id",
              "title" => "Linien Id",
              "type" => "`$STRING`",
              "short" => "Line ID",
            },
            {
              "name" => "linien_text",
              "title" => "Linien Text",
              "type" => "`$STRING`",
              "short" => "Line text/number",
            },
            {
              "name" => "produkt_id",
              "title" => "Produkt Id",
              "type" => "`$STRING`",
              "short" => "Product ID (train type)",
            },
            {
              "name" => "verkehrsmittel_text",
              "title" => "Verkehrsmittel Text",
              "type" => "`$STRING`",
              "short" => "Transport type",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "record",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/catalog/datasets/ist-daten-sbb/records",
                  "segments" => [
                    {
                      "lit" => "catalog",
                    },
                    {
                      "lit" => "datasets",
                    },
                    {
                      "lit" => "ist-daten-sbb",
                    },
                    {
                      "lit" => "records",
                    },
                  ],
                  "parts" => [
                    "catalog",
                    "datasets",
                    "ist-daten-sbb",
                    "records",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "exclude",
                        "orig" => "exclude",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "de",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "offset",
                        "orig" => "offset",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 0,
                      },
                      {
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "refine",
                        "orig" => "refine",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "select",
                        "orig" => "select",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "where",
                        "orig" => "where",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    SwissFederalRailwaysSbbFeatures.make_feature(name)
  end
end
