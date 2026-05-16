# SwissFederalRailwaysSbb SDK



Available for [Golang](go/) and [Lua](lua/) and [PHP](php/) and [Python](py/) and [Ruby](rb/) and [TypeScript](ts/).


## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Export** |  | `/catalog/datasets/ist-daten-sbb/exports/json` |
| **Record** |  | `/catalog/datasets/ist-daten-sbb/records` |

Each entity supports the following operations where available: **load**, **list**, **create**,
**update**, and **remove**.


## Architecture

### Entity-operation model

Every SDK call follows the same pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

At each stage a feature hook fires (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), allowing features to inspect or modify the pipeline.

### Features

Features are hook-based middleware that extend SDK behaviour.

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

You can add custom features by passing them in the `extend` option at
construction time.

### Direct and Prepare

For endpoints not covered by the entity model, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`, `headers`,
and `body`.


## Quick start

### Golang

```go
import sdk "github.com/voxgig-sdk/swiss-federal-railways-sbb-sdk"

client := sdk.NewSwissFederalRailwaysSbbSDK(map[string]any{
    "apikey": os.Getenv("SWISS-FEDERAL-RAILWAYS-SBB_APIKEY"),
})

// List all exports
exports, err := client.Export(nil).List(nil, nil)
```

### Lua

```lua
local sdk = require("swiss-federal-railways-sbb_sdk")

local client = sdk.new({
  apikey = os.getenv("SWISS-FEDERAL-RAILWAYS-SBB_APIKEY"),
})

-- List all exports
local exports, err = client:Export(nil):list(nil, nil)

-- Load a specific export
local export, err = client:Export(nil):load(
  { id = "example_id" }, nil
)
```

### PHP

```php
<?php
require_once 'swissfederalrailwayssbb_sdk.php';

$client = new SwissFederalRailwaysSbbSDK([
    "apikey" => getenv("SWISS-FEDERAL-RAILWAYS-SBB_APIKEY"),
]);

// List all exports
[$exports, $err] = $client->Export(null)->list(null, null);

// Load a specific export
[$export, $err] = $client->Export(null)->load(
    ["id" => "example_id"], null
);
```

### Python

```python
import os
from swissfederalrailwayssbb_sdk import SwissFederalRailwaysSbbSDK

client = SwissFederalRailwaysSbbSDK({
    "apikey": os.environ.get("SWISS-FEDERAL-RAILWAYS-SBB_APIKEY"),
})

# List all exports
exports, err = client.Export(None).list(None, None)

# Load a specific export
export, err = client.Export(None).load(
    {"id": "example_id"}, None
)
```

### Ruby

```ruby
require_relative "SwissFederalRailwaysSbb_sdk"

client = SwissFederalRailwaysSbbSDK.new({
  "apikey" => ENV["SWISS-FEDERAL-RAILWAYS-SBB_APIKEY"],
})

# List all exports
exports, err = client.Export(nil).list(nil, nil)

# Load a specific export
export, err = client.Export(nil).load(
  { "id" => "example_id" }, nil
)
```

### TypeScript

```ts
import { SwissFederalRailwaysSbbSDK } from 'swiss-federal-railways-sbb'

const client = new SwissFederalRailwaysSbbSDK({
  apikey: process.env.SWISS-FEDERAL-RAILWAYS-SBB_APIKEY,
})

// List all exports
const exports = await client.Export().list()
```


## Testing

Both SDKs provide a test mode that replaces the HTTP transport with an
in-memory mock, so tests run without a network connection.

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Export(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Export(nil):load(
  { id = "test01" }, nil
)
```

### PHP

```php
$client = SwissFederalRailwaysSbbSDK::test(null, null);
[$result, $err] = $client->Export(null)->load(
    ["id" => "test01"], null
);
```

### Python

```python
client = SwissFederalRailwaysSbbSDK.test(None, None)
result, err = client.Export(None).load(
    {"id": "test01"}, None
)
```

### Ruby

```ruby
client = SwissFederalRailwaysSbbSDK.test(nil, nil)
result, err = client.Export(nil).load(
  { "id" => "test01" }, nil
)
```

### TypeScript

```ts
const client = SwissFederalRailwaysSbbSDK.test()
const result = await client.Export().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```


## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
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

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
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

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```


## Language-specific documentation

- [Golang SDK](go/README.md)
- [Lua SDK](lua/README.md)
- [PHP SDK](php/README.md)
- [Python SDK](py/README.md)
- [Ruby SDK](rb/README.md)
- [TypeScript SDK](ts/README.md)

