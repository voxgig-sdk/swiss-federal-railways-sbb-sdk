# SwissFederalRailwaysSbb Python SDK Reference

Complete API reference for the SwissFederalRailwaysSbb Python SDK.


## SwissFederalRailwaysSbbSDK

### Constructor

```python
from swiss-federal-railways-sbb_sdk import SwissFederalRailwaysSbbSDK

client = SwissFederalRailwaysSbbSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SwissFederalRailwaysSbbSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = SwissFederalRailwaysSbbSDK.test()
```


### Instance Methods

#### `Export(data=None)`

Create a new `ExportEntity` instance. Pass `None` for no initial data.

#### `Record(data=None)`

Create a new `RecordEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## ExportEntity

```python
export = client.Export()
```

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Export().list({})
```

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Export().load({"id": "export_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RecordEntity

```python
record = client.Record()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Record().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecordEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = SwissFederalRailwaysSbbSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

