# SwissFederalRailwaysSbb TypeScript SDK Reference

Complete API reference for the SwissFederalRailwaysSbb TypeScript SDK.


## SwissFederalRailwaysSbbSDK

### Constructor

```ts
new SwissFederalRailwaysSbbSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SwissFederalRailwaysSbbSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = SwissFederalRailwaysSbbSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `SwissFederalRailwaysSbbSDK` instance in test mode.


### Instance Methods

#### `Export(data?: object)`

Create a new `Export` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExportEntity` instance.

#### `Record(data?: object)`

Create a new `Record` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RecordEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `SwissFederalRailwaysSbbSDK.test()`.

**Returns:** `SwissFederalRailwaysSbbSDK` instance in test mode.


---

## ExportEntity

```ts
const export = client.Export()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Export().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Export().load({ id: 'export_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `SwissFederalRailwaysSbbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RecordEntity

```ts
const record = client.Record()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Record().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RecordEntity` instance with the same client and
options.

#### `client()`

Return the parent `SwissFederalRailwaysSbbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new SwissFederalRailwaysSbbSDK({
  feature: {
    test: { active: true },
  }
})
```

