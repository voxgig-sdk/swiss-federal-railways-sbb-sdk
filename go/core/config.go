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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "exclude",
											"orig": "exclude",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "de",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine",
											"orig": "refine",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "where",
											"orig": "where",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/catalog/datasets/ist-daten-sbb/exports/json",
								"parts": []any{
									"catalog",
									"datasets",
									"ist-daten-sbb",
									"exports",
									"json",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": ";",
											"kind": "query",
											"name": "delimiter",
											"orig": "delimiter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "exclude",
											"orig": "exclude",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "de",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine",
											"orig": "refine",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "where",
											"orig": "where",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/catalog/datasets/ist-daten-sbb/exports/csv",
								"parts": []any{
									"catalog",
									"datasets",
									"ist-daten-sbb",
									"exports",
									"csv",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"short": "Actual departure time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "abfahrtszeit_soll",
						"short": "Scheduled departure time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ankunftszeit_ist",
						"short": "Actual arrival time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ankunftszeit_soll",
						"short": "Scheduled arrival time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "betreiber_id",
						"short": "Operator ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "betreiber_name",
						"short": "Operator name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "betriebstag",
						"short": "Operating day",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "durchfahrt",
						"short": "Through passage (no stop)",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "faellt_aus",
						"short": "Cancelled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "fahrt_bezeichner",
						"short": "Trip identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "haltestellen_name",
						"short": "Station name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique record identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "linien_id",
						"short": "Line ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "linien_text",
						"short": "Line text/number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "produkt_id",
						"short": "Product ID (train type)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verkehrsmittel_text",
						"short": "Transport type",
						"type": "`$STRING`",
					},
				},
				"name": "record",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "exclude",
											"orig": "exclude",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "de",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine",
											"orig": "refine",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "select",
											"orig": "select",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "where",
											"orig": "where",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/catalog/datasets/ist-daten-sbb/records",
								"parts": []any{
									"catalog",
									"datasets",
									"ist-daten-sbb",
									"records",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
