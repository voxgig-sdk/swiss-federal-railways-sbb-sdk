# SwissFederalRailwaysSbb Ruby SDK Reference

Complete API reference for the SwissFederalRailwaysSbb Ruby SDK.


## SwissFederalRailwaysSbbSDK

### Constructor

```ruby
require_relative 'swiss-federal-railways-sbb_sdk'

client = SwissFederalRailwaysSbbSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SwissFederalRailwaysSbbSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = SwissFederalRailwaysSbbSDK.test
```


### Instance Methods

#### `Export(data = nil)`

Create a new `Export` entity instance. Pass `nil` for no initial data.

#### `Record(data = nil)`

Create a new `Record` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ExportEntity

```ruby
export = client.export
```

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.export.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.export.load({ "id" => "export_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ExportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RecordEntity

```ruby
record = client.record
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abfahrtszeit_ist` | ``$STRING`` | No |  |
| `abfahrtszeit_soll` | ``$STRING`` | No |  |
| `ankunftszeit_ist` | ``$STRING`` | No |  |
| `ankunftszeit_soll` | ``$STRING`` | No |  |
| `betreiber_id` | ``$STRING`` | No |  |
| `betreiber_name` | ``$STRING`` | No |  |
| `betriebstag` | ``$STRING`` | No |  |
| `durchfahrt` | ``$BOOLEAN`` | No |  |
| `faellt_aus` | ``$BOOLEAN`` | No |  |
| `fahrt_bezeichner` | ``$STRING`` | No |  |
| `haltestellen_name` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `linien_id` | ``$STRING`` | No |  |
| `linien_text` | ``$STRING`` | No |  |
| `produkt_id` | ``$STRING`` | No |  |
| `verkehrsmittel_text` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.record.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RecordEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = SwissFederalRailwaysSbbSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

