-- Typed models for the SwissFederalRailwaysSbb SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Export

---@class ExportLoadMatch

---@class ExportListMatch

---@class Record
---@field abfahrtszeit_ist? string
---@field abfahrtszeit_soll? string
---@field ankunftszeit_ist? string
---@field ankunftszeit_soll? string
---@field betreiber_id? string
---@field betreiber_name? string
---@field betriebstag? string
---@field durchfahrt? boolean
---@field faellt_aus? boolean
---@field fahrt_bezeichner? string
---@field haltestellen_name? string
---@field id? string
---@field linien_id? string
---@field linien_text? string
---@field produkt_id? string
---@field verkehrsmittel_text? string

---@class RecordListMatch
---@field abfahrtszeit_ist? string
---@field abfahrtszeit_soll? string
---@field ankunftszeit_ist? string
---@field ankunftszeit_soll? string
---@field betreiber_id? string
---@field betreiber_name? string
---@field betriebstag? string
---@field durchfahrt? boolean
---@field faellt_aus? boolean
---@field fahrt_bezeichner? string
---@field haltestellen_name? string
---@field id? string
---@field linien_id? string
---@field linien_text? string
---@field produkt_id? string
---@field verkehrsmittel_text? string

local M = {}

return M
