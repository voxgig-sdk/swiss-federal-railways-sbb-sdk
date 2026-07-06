# SwissFederalRailwaysSbb Golang SDK Reference

Complete API reference for the SwissFederalRailwaysSbb Golang SDK.


## SwissFederalRailwaysSbbSDK

### Constructor

```go
func NewSwissFederalRailwaysSbbSDK(options map[string]any) *SwissFederalRailwaysSbbSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *SwissFederalRailwaysSbbSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *SwissFederalRailwaysSbbSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Export(data map[string]any) SwissFederalRailwaysSbbEntity`

Create a new `Export` entity instance. Pass `nil` for no initial data.

#### `Record(data map[string]any) SwissFederalRailwaysSbbEntity`

Create a new `Record` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ExportEntity

```go
export := client.Export(nil)
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Export(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Export(nil).Load(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RecordEntity

```go
record := client.Record(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abfahrtszeit_ist` | `string` | No |  |
| `abfahrtszeit_soll` | `string` | No |  |
| `ankunftszeit_ist` | `string` | No |  |
| `ankunftszeit_soll` | `string` | No |  |
| `betreiber_id` | `string` | No |  |
| `betreiber_name` | `string` | No |  |
| `betriebstag` | `string` | No |  |
| `durchfahrt` | `bool` | No |  |
| `faellt_aus` | `bool` | No |  |
| `fahrt_bezeichner` | `string` | No |  |
| `haltestellen_name` | `string` | No |  |
| `id` | `string` | No |  |
| `linien_id` | `string` | No |  |
| `linien_text` | `string` | No |  |
| `produkt_id` | `string` | No |  |
| `verkehrsmittel_text` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Record(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RecordEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewSwissFederalRailwaysSbbSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

