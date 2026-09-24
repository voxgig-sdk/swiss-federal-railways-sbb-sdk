package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "SwissFederalRailwaysSbb",
			"slug": "swiss-federal-railways-sbb",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://data.sbb.ch/api/explore/v2.1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"export": map[string]any{},
				"record": map[string]any{},
			},
		},
		"entity": map[string]any{
			"export": map[string]any{
				"fields": []any{},
				"name": "export",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/catalog/datasets/ist-daten-sbb/exports/json",
								"segments": []any{
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"lit": "ist-daten-sbb",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"lit": "json",
									},
								},
								"parts": []any{
									"catalog",
									"datasets",
									"ist-daten-sbb",
									"exports",
									"json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "exclude",
											"orig": "exclude",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "de",
										},
										map[string]any{
											"name": "refine",
											"orig": "refine",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "where",
											"orig": "where",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "json",
									"exist": []any{
										"exclude",
										"lang",
										"refine",
										"where",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/catalog/datasets/ist-daten-sbb/exports/csv",
								"segments": []any{
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"lit": "ist-daten-sbb",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"lit": "csv",
									},
								},
								"parts": []any{
									"catalog",
									"datasets",
									"ist-daten-sbb",
									"exports",
									"csv",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "delimiter",
											"orig": "delimiter",
											"type": "`$STRING`",
											"kind": "query",
											"example": ";",
										},
										map[string]any{
											"name": "exclude",
											"orig": "exclude",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "de",
										},
										map[string]any{
											"name": "refine",
											"orig": "refine",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "where",
											"orig": "where",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "csv",
									"exist": []any{
										"delimiter",
										"exclude",
										"lang",
										"refine",
										"where",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"record": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "abfahrtszeit_ist",
						"title": "Abfahrtszeit Ist",
						"type": "`$STRING`",
						"short": "Actual departure time",
						"format": "date-time",
					},
					map[string]any{
						"name": "abfahrtszeit_soll",
						"title": "Abfahrtszeit Soll",
						"type": "`$STRING`",
						"short": "Scheduled departure time",
						"format": "date-time",
					},
					map[string]any{
						"name": "ankunftszeit_ist",
						"title": "Ankunftszeit Ist",
						"type": "`$STRING`",
						"short": "Actual arrival time",
						"format": "date-time",
					},
					map[string]any{
						"name": "ankunftszeit_soll",
						"title": "Ankunftszeit Soll",
						"type": "`$STRING`",
						"short": "Scheduled arrival time",
						"format": "date-time",
					},
					map[string]any{
						"name": "betreiber_id",
						"title": "Betreiber Id",
						"type": "`$STRING`",
						"short": "Operator ID",
					},
					map[string]any{
						"name": "betreiber_name",
						"title": "Betreiber Name",
						"type": "`$STRING`",
						"short": "Operator name",
					},
					map[string]any{
						"name": "betriebstag",
						"title": "Betriebstag",
						"type": "`$STRING`",
						"short": "Operating day",
						"format": "date",
					},
					map[string]any{
						"name": "durchfahrt",
						"title": "Durchfahrt",
						"type": "`$BOOLEAN`",
						"short": "Through passage (no stop)",
					},
					map[string]any{
						"name": "faellt_aus",
						"title": "Faellt Aus",
						"type": "`$BOOLEAN`",
						"short": "Cancelled",
					},
					map[string]any{
						"name": "fahrt_bezeichner",
						"title": "Fahrt Bezeichner",
						"type": "`$STRING`",
						"short": "Trip identifier",
					},
					map[string]any{
						"name": "haltestellen_name",
						"title": "Haltestellen Name",
						"type": "`$STRING`",
						"short": "Station name",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique record identifier",
					},
					map[string]any{
						"name": "linien_id",
						"title": "Linien Id",
						"type": "`$STRING`",
						"short": "Line ID",
					},
					map[string]any{
						"name": "linien_text",
						"title": "Linien Text",
						"type": "`$STRING`",
						"short": "Line text/number",
					},
					map[string]any{
						"name": "produkt_id",
						"title": "Produkt Id",
						"type": "`$STRING`",
						"short": "Product ID (train type)",
					},
					map[string]any{
						"name": "verkehrsmittel_text",
						"title": "Verkehrsmittel Text",
						"type": "`$STRING`",
						"short": "Transport type",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "record",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/catalog/datasets/ist-daten-sbb/records",
								"segments": []any{
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"lit": "ist-daten-sbb",
									},
									map[string]any{
										"lit": "records",
									},
								},
								"parts": []any{
									"catalog",
									"datasets",
									"ist-daten-sbb",
									"records",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "exclude",
											"orig": "exclude",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "de",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "refine",
											"orig": "refine",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "select",
											"orig": "select",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "where",
											"orig": "where",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
