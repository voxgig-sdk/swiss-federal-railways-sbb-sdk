# SwissFederalRailwaysSbb SDK

Browse Swiss Federal Railways (SBB) open datasets — infrastructure, timetables, and previous-day soll/ist performance

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Swiss Federal Railways (SBB)

[Swiss Federal Railways (SBB / Schweizerische Bundesbahnen)](https://www.sbb.ch/) publishes a wide-ranging open data portal at [data.sbb.ch](https://data.sbb.ch/). The portal is powered by [OpenDataSoft](https://www.opendatasoft.com/) and exposes a standard Explore v2.1 REST API for searching, filtering and exporting the underlying datasets.

For this SDK the focus is the previous-day operational data — the actual vs. scheduled (`ist` vs. `soll`) record of departures, arrivals, delays and cancellations across the SBB network. Each row typically carries the scheduled and effective times for a stop, the operator, line and a status flag for cancellations, so it can be joined back to other timetable or station datasets.

What you can do via the API:

- Query individual records of a dataset with filters, sorts and aggregations using the OpenDataSoft Query Language (ODSQL).
- Export full result sets as JSON, CSV, GeoJSON, Parquet or Excel.
- Browse the dataset catalog and discover other SBB open datasets (infrastructure, station equipment, ridership, etc.).

Operational notes: the v2.1 API does not require authentication for public datasets, though anonymous use is rate-limited by the OpenDataSoft platform. The previous-day dataset is refreshed daily and is not a real-time feed; for live train positions use other SBB/opentransportdata.swiss services.

## Try it

**TypeScript**
```bash
npm install swiss-federal-railways-sbb
```

**Python**
```bash
pip install swiss-federal-railways-sbb-sdk
```

**PHP**
```bash
composer require voxgig/swiss-federal-railways-sbb-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/swiss-federal-railways-sbb-sdk/go
```

**Ruby**
```bash
gem install swiss-federal-railways-sbb-sdk
```

**Lua**
```bash
luarocks install swiss-federal-railways-sbb-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { SwissFederalRailwaysSbbSDK } from 'swiss-federal-railways-sbb'

const client = new SwissFederalRailwaysSbbSDK({})

// List all exports
const exports = await client.Export().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o swiss-federal-railways-sbb-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "swiss-federal-railways-sbb": {
      "command": "/abs/path/to/swiss-federal-railways-sbb-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Export** | Bulk export of a dataset's records in a chosen format (JSON, CSV, GeoJSON, Parquet, Excel), via `/catalog/datasets/{dataset_id}/exports/{format}`. | `/catalog/datasets/ist-daten-sbb/exports/json` |
| **Record** | An individual row of a dataset — for the SBB previous-day feed, one scheduled stop with its soll/ist times and cancellation flag — retrieved via `/catalog/datasets/{dataset_id}/records`. | `/catalog/datasets/ist-daten-sbb/records` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from swissfederalrailwayssbb_sdk import SwissFederalRailwaysSbbSDK

client = SwissFederalRailwaysSbbSDK({})

# List all exports
exports, err = client.Export(None).list(None, None)

# Load a specific export
export, err = client.Export(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'swissfederalrailwayssbb_sdk.php';

$client = new SwissFederalRailwaysSbbSDK([]);

// List all exports
[$exports, $err] = $client->Export(null)->list(null, null);

// Load a specific export
[$export, $err] = $client->Export(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/swiss-federal-railways-sbb-sdk/go"

client := sdk.NewSwissFederalRailwaysSbbSDK(map[string]any{})

// List all exports
exports, err := client.Export(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "SwissFederalRailwaysSbb_sdk"

client = SwissFederalRailwaysSbbSDK.new({})

# List all exports
exports, err = client.Export(nil).list(nil, nil)

# Load a specific export
export, err = client.Export(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("swiss-federal-railways-sbb_sdk")

local client = sdk.new({})

-- List all exports
local exports, err = client:Export(nil):list(nil, nil)

-- Load a specific export
local export, err = client:Export(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = SwissFederalRailwaysSbbSDK.test()
const result = await client.Export().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = SwissFederalRailwaysSbbSDK.test(None, None)
result, err = client.Export(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = SwissFederalRailwaysSbbSDK::test(null, null);
[$result, $err] = $client->Export(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Export(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = SwissFederalRailwaysSbbSDK.test(nil, nil)
result, err = client.Export(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Export(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Swiss Federal Railways (SBB)

- Upstream: [https://data.sbb.ch/](https://data.sbb.ch/)
- API docs: [https://data.sbb.ch/api/explore/v2.1/console](https://data.sbb.ch/api/explore/v2.1/console)

- Datasets are published by SBB under terms summarised as `NonCommercialAllowed-CommercialAllowed-ReferenceRequired`.
- Attribution to SBB / Schweizerische Bundesbahnen is required when reusing the data.
- Some datasets ultimately originate from [opentransportdata.swiss](https://opentransportdata.swiss/) and may carry additional terms.
- Full licence text: <https://data.sbb.ch/page/licence>.

---

Generated from the Swiss Federal Railways (SBB) OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
