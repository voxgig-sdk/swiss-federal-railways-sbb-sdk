# SwissFederalRailwaysSbb PHP SDK Reference

Complete API reference for the SwissFederalRailwaysSbb PHP SDK.


## SwissFederalRailwaysSbbSDK

### Constructor

```php
require_once __DIR__ . '/swiss-federal-railways-sbb_sdk.php';

$client = new SwissFederalRailwaysSbbSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SwissFederalRailwaysSbbSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = SwissFederalRailwaysSbbSDK::test();
```


### Instance Methods

#### `Export($data = null)`

Create a new `ExportEntity` instance. Pass `null` for no initial data.

#### `Record($data = null)`

Create a new `RecordEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ExportEntity

```php
$export = $client->export();
```

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->export()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->export()->load(["id" => "export_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ExportEntity`

Create a new `ExportEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RecordEntity

```php
$record = $client->record();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->record()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RecordEntity`

Create a new `RecordEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new SwissFederalRailwaysSbbSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

