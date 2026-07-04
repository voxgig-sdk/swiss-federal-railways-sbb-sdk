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

# Match filter for Export#load (any subset of Export fields).
class ExportLoadMatch
end

# Match filter for Export#list (any subset of Export fields).
class ExportListMatch
end

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

# Match filter for Record#list (any subset of Record fields).
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
RecordListMatch = Struct.new(
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

