// Typed models for the SwissFederalRailwaysSbb SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Export is the typed data model for the export entity.
type Export struct {
}

// ExportLoadMatch mirrors the export fields as an all-optional match
// filter (Go analog of Partial<Export>).
type ExportLoadMatch struct {
}

// ExportListMatch mirrors the export fields as an all-optional match
// filter (Go analog of Partial<Export>).
type ExportListMatch struct {
}

// Record is the typed data model for the record entity.
type Record struct {
	AbfahrtszeitIst *string `json:"abfahrtszeit_ist,omitempty"`
	AbfahrtszeitSoll *string `json:"abfahrtszeit_soll,omitempty"`
	AnkunftszeitIst *string `json:"ankunftszeit_ist,omitempty"`
	AnkunftszeitSoll *string `json:"ankunftszeit_soll,omitempty"`
	BetreiberId *string `json:"betreiber_id,omitempty"`
	BetreiberName *string `json:"betreiber_name,omitempty"`
	Betriebstag *string `json:"betriebstag,omitempty"`
	Durchfahrt *bool `json:"durchfahrt,omitempty"`
	FaelltAus *bool `json:"faellt_aus,omitempty"`
	FahrtBezeichner *string `json:"fahrt_bezeichner,omitempty"`
	HaltestellenName *string `json:"haltestellen_name,omitempty"`
	Id *string `json:"id,omitempty"`
	LinienId *string `json:"linien_id,omitempty"`
	LinienText *string `json:"linien_text,omitempty"`
	ProduktId *string `json:"produkt_id,omitempty"`
	VerkehrsmittelText *string `json:"verkehrsmittel_text,omitempty"`
}

// RecordListMatch mirrors the record fields as an all-optional match
// filter (Go analog of Partial<Record>).
type RecordListMatch struct {
	AbfahrtszeitIst *string `json:"abfahrtszeit_ist,omitempty"`
	AbfahrtszeitSoll *string `json:"abfahrtszeit_soll,omitempty"`
	AnkunftszeitIst *string `json:"ankunftszeit_ist,omitempty"`
	AnkunftszeitSoll *string `json:"ankunftszeit_soll,omitempty"`
	BetreiberId *string `json:"betreiber_id,omitempty"`
	BetreiberName *string `json:"betreiber_name,omitempty"`
	Betriebstag *string `json:"betriebstag,omitempty"`
	Durchfahrt *bool `json:"durchfahrt,omitempty"`
	FaelltAus *bool `json:"faellt_aus,omitempty"`
	FahrtBezeichner *string `json:"fahrt_bezeichner,omitempty"`
	HaltestellenName *string `json:"haltestellen_name,omitempty"`
	Id *string `json:"id,omitempty"`
	LinienId *string `json:"linien_id,omitempty"`
	LinienText *string `json:"linien_text,omitempty"`
	ProduktId *string `json:"produkt_id,omitempty"`
	VerkehrsmittelText *string `json:"verkehrsmittel_text,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
