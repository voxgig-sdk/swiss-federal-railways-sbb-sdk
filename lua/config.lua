-- SwissFederalRailwaysSbb SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "SwissFederalRailwaysSbb",
      slug = "swiss-federal-railways-sbb",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://data.sbb.ch/api/explore/v2.1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["export"] = {},
        ["record"] = {},
      },
    },
    entity = {
      ["export"] = {
        ["fields"] = {},
        ["name"] = "export",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "exclude",
                      ["orig"] = "exclude",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "de",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine",
                      ["orig"] = "refine",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "where",
                      ["orig"] = "where",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/catalog/datasets/ist-daten-sbb/exports/json",
                ["parts"] = {
                  "catalog",
                  "datasets",
                  "ist-daten-sbb",
                  "exports",
                  "json",
                },
                ["select"] = {
                  ["$action"] = "json",
                  ["exist"] = {
                    "exclude",
                    "lang",
                    "refine",
                    "where",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = ";",
                      ["kind"] = "query",
                      ["name"] = "delimiter",
                      ["orig"] = "delimiter",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "exclude",
                      ["orig"] = "exclude",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "de",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine",
                      ["orig"] = "refine",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "where",
                      ["orig"] = "where",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/catalog/datasets/ist-daten-sbb/exports/csv",
                ["parts"] = {
                  "catalog",
                  "datasets",
                  "ist-daten-sbb",
                  "exports",
                  "csv",
                },
                ["select"] = {
                  ["$action"] = "csv",
                  ["exist"] = {
                    "delimiter",
                    "exclude",
                    "lang",
                    "refine",
                    "where",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["record"] = {
        ["fields"] = {
          {
            ["name"] = "abfahrtszeit_ist",
            ["short"] = "Actual departure time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "abfahrtszeit_soll",
            ["short"] = "Scheduled departure time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ankunftszeit_ist",
            ["short"] = "Actual arrival time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ankunftszeit_soll",
            ["short"] = "Scheduled arrival time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "betreiber_id",
            ["short"] = "Operator ID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "betreiber_name",
            ["short"] = "Operator name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "betriebstag",
            ["short"] = "Operating day",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "durchfahrt",
            ["short"] = "Through passage (no stop)",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "faellt_aus",
            ["short"] = "Cancelled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "fahrt_bezeichner",
            ["short"] = "Trip identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "haltestellen_name",
            ["short"] = "Station name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique record identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "linien_id",
            ["short"] = "Line ID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "linien_text",
            ["short"] = "Line text/number",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "produkt_id",
            ["short"] = "Product ID (train type)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verkehrsmittel_text",
            ["short"] = "Transport type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "record",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "exclude",
                      ["orig"] = "exclude",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "de",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "order_by",
                      ["orig"] = "order_by",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine",
                      ["orig"] = "refine",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "select",
                      ["orig"] = "select",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "where",
                      ["orig"] = "where",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/catalog/datasets/ist-daten-sbb/records",
                ["parts"] = {
                  "catalog",
                  "datasets",
                  "ist-daten-sbb",
                  "records",
                },
                ["select"] = {
                  ["exist"] = {
                    "exclude",
                    "lang",
                    "limit",
                    "offset",
                    "order_by",
                    "refine",
                    "select",
                    "where",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
