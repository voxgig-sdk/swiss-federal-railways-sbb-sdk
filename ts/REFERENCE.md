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
const export_ = client.Export()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `json` | `/catalog/datasets/ist-daten-sbb/exports/json` | `client.Export().list({ $action: 'json', ... })` |
| `csv` | `/catalog/datasets/ist-daten-sbb/exports/csv` | `client.Export().load({ $action: 'csv', ... })` |

An action returns that action's OWN response, which is not necessarily a
Export record — check the API definition for its shape.

```ts
const result = await client.Export().list({
  $action: 'json',
  /* ...the action's own arguments */
})
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
const result = await client.Export().load()
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
| `abfahrtszeit_ist` | `string` | No | Actual departure time |
| `abfahrtszeit_soll` | `string` | No | Scheduled departure time |
| `ankunftszeit_ist` | `string` | No | Actual arrival time |
| `ankunftszeit_soll` | `string` | No | Scheduled arrival time |
| `betreiber_id` | `string` | No | Operator ID |
| `betreiber_name` | `string` | No | Operator name |
| `betriebstag` | `string` | No | Operating day |
| `durchfahrt` | `boolean` | No | Through passage (no stop) |
| `faellt_aus` | `boolean` | No | Cancelled |
| `fahrt_bezeichner` | `string` | No | Trip identifier |
| `haltestellen_name` | `string` | No | Station name |
| `id` | `string` | No | Unique record identifier |
| `linien_id` | `string` | No | Line ID |
| `linien_text` | `string` | No | Line text/number |
| `produkt_id` | `string` | No | Product ID (train type) |
| `verkehrsmittel_text` | `string` | No | Transport type |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

