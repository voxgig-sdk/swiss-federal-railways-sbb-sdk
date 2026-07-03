# SwissFederalRailwaysSbb SDK

Swiss Federal Railways (SBB) client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

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

## Quickstart

### TypeScript

```ts
import { SwissFederalRailwaysSbbSDK } from 'swiss-federal-railways-sbb'

const client = new SwissFederalRailwaysSbbSDK({
  apikey: process.env.SWISS-FEDERAL-RAILWAYS-SBB_APIKEY,
})

// List all exports
const exports = await client.Export().list()
console.log(exports.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

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
| **Export** |  | `/catalog/datasets/ist-daten-sbb/exports/json` |
| **Record** |  | `/catalog/datasets/ist-daten-sbb/records` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from swissfederalrailwayssbb_sdk import SwissFederalRailwaysSbbSDK

client = SwissFederalRailwaysSbbSDK({
    "apikey": os.environ.get("SWISS-FEDERAL-RAILWAYS-SBB_APIKEY"),
})

# List all exports
exports, err = client.Export().list()
print(exports)

# Load a specific export
export, err = client.Export().load({"id": "example_id"})
print(export)
```

### PHP

```php
<?php
require_once 'swissfederalrailwayssbb_sdk.php';

$client = new SwissFederalRailwaysSbbSDK([
    "apikey" => getenv("SWISS-FEDERAL-RAILWAYS-SBB_APIKEY"),
]);

// List all exports
[$exports, $err] = $client->Export()->list();
print_r($exports);

// Load a specific export
[$export, $err] = $client->Export()->load(["id" => "example_id"]);
print_r($export);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/swiss-federal-railways-sbb-sdk/go"

client := sdk.NewSwissFederalRailwaysSbbSDK(map[string]any{
    "apikey": os.Getenv("SWISS-FEDERAL-RAILWAYS-SBB_APIKEY"),
})

// List all exports
exports, err := client.Export(nil).List(nil, nil)
fmt.Println(exports)
```

### Ruby

```ruby
require_relative "SwissFederalRailwaysSbb_sdk"

client = SwissFederalRailwaysSbbSDK.new({
  "apikey" => ENV["SWISS-FEDERAL-RAILWAYS-SBB_APIKEY"],
})

# List all exports
exports, err = client.Export().list
puts exports

# Load a specific export
export, err = client.Export().load({ "id" => "example_id" })
puts export
```

### Lua

```lua
local sdk = require("swiss-federal-railways-sbb_sdk")

local client = sdk.new({
  apikey = os.getenv("SWISS-FEDERAL-RAILWAYS-SBB_APIKEY"),
})

-- List all exports
local exports, err = client:Export():list()
print(exports)

-- Load a specific export
local export, err = client:Export():load({ id = "example_id" })
print(export)
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
client = SwissFederalRailwaysSbbSDK.test()
result, err = client.Export().load({"id": "test01"})
```

### PHP

```php
$client = SwissFederalRailwaysSbbSDK::test();
[$result, $err] = $client->Export()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.Export(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = SwissFederalRailwaysSbbSDK.test
result, err = client.Export().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:Export():load({ id = "test01" })
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

---

Generated from the Swiss Federal Railways (SBB) OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
