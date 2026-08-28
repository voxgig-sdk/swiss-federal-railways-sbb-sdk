# frozen_string_literal: true

# Typed models for the SwissFederalRailwaysSbb SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Export entity data model.
class Export
end

# Request payload for Export#load.
#
# @!attribute [rw] delimiter
#   @return [String, nil]
#
# @!attribute [rw] exclude
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] refine
#   @return [String, nil]
#
# @!attribute [rw] where
#   @return [String, nil]
ExportLoadMatch = Struct.new(
  :delimiter,
  :exclude,
  :lang,
  :refine,
  :where,
  keyword_init: true
)

# Request payload for Export#list.
#
# @!attribute [rw] exclude
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] refine
#   @return [String, nil]
#
# @!attribute [rw] where
#   @return [String, nil]
ExportListMatch = Struct.new(
  :exclude,
  :lang,
  :refine,
  :where,
  keyword_init: true
)

# Record entity data model.
#
# @!attribute [rw] abfahrtszeit_ist
#   @return [String, nil]
#
# @!attribute [rw] abfahrtszeit_soll
#   @return [String, nil]
#
# @!attribute [rw] ankunftszeit_ist
#   @return [String, nil]
#
# @!attribute [rw] ankunftszeit_soll
#   @return [String, nil]
#
# @!attribute [rw] betreiber_id
#   @return [String, nil]
#
# @!attribute [rw] betreiber_name
#   @return [String, nil]
#
# @!attribute [rw] betriebstag
#   @return [String, nil]
#
# @!attribute [rw] durchfahrt
#   @return [Boolean, nil]
#
# @!attribute [rw] faellt_aus
#   @return [Boolean, nil]
#
# @!attribute [rw] fahrt_bezeichner
#   @return [String, nil]
#
# @!attribute [rw] haltestellen_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] linien_id
#   @return [String, nil]
#
# @!attribute [rw] linien_text
#   @return [String, nil]
#
# @!attribute [rw] produkt_id
#   @return [String, nil]
#
# @!attribute [rw] verkehrsmittel_text
#   @return [String, nil]
Record = Struct.new(
  :abfahrtszeit_ist,
  :abfahrtszeit_soll,
  :ankunftszeit_ist,
  :ankunftszeit_soll,
  :betreiber_id,
  :betreiber_name,
  :betriebstag,
  :durchfahrt,
  :faellt_aus,
  :fahrt_bezeichner,
  :haltestellen_name,
  :id,
  :linien_id,
  :linien_text,
  :produkt_id,
  :verkehrsmittel_text,
  keyword_init: true
)

# Request payload for Record#list.
#
# @!attribute [rw] exclude
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] refine
#   @return [String, nil]
#
# @!attribute [rw] select
#   @return [String, nil]
#
# @!attribute [rw] where
#   @return [String, nil]
RecordListMatch = Struct.new(
  :exclude,
  :lang,
  :limit,
  :offset,
  :order_by,
  :refine,
  :select,
  :where,
  keyword_init: true
)

