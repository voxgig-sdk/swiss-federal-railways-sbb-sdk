// Typed models for the SwissFederalRailwaysSbb SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Export {
}

export interface ExportLoadMatch {
  delimiter?: string
  exclude?: string
  lang?: string
  refine?: string
  where?: string

  // Selects a custom action instead of the plain load:
  //   'csv'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ExportListMatch {
  exclude?: string
  lang?: string
  refine?: string
  where?: string

  // Selects a custom action instead of the plain list:
  //   'json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RecordType {
  abfahrtszeit_ist?: string
  abfahrtszeit_soll?: string
  ankunftszeit_ist?: string
  ankunftszeit_soll?: string
  betreiber_id?: string
  betreiber_name?: string
  betriebstag?: string
  durchfahrt?: boolean
  faellt_aus?: boolean
  fahrt_bezeichner?: string
  haltestellen_name?: string
  id?: string
  linien_id?: string
  linien_text?: string
  produkt_id?: string
  verkehrsmittel_text?: string
}

export interface RecordListMatch {
  exclude?: string
  lang?: string
  limit?: number
  offset?: number
  order_by?: string
  refine?: string
  select?: string
  where?: string
}

