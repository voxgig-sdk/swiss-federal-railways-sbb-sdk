# Typed models for the SwissFederalRailwaysSbb SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Export(TypedDict):
    pass


class ExportLoadMatch(TypedDict, total=False):
    delimiter: str
    exclude: str
    lang: str
    refine: str
    where: str


class ExportListMatch(TypedDict, total=False):
    exclude: str
    lang: str
    refine: str
    where: str


class Record(TypedDict, total=False):
    abfahrtszeit_ist: str
    abfahrtszeit_soll: str
    ankunftszeit_ist: str
    ankunftszeit_soll: str
    betreiber_id: str
    betreiber_name: str
    betriebstag: str
    durchfahrt: bool
    faellt_aus: bool
    fahrt_bezeichner: str
    haltestellen_name: str
    id: str
    linien_id: str
    linien_text: str
    produkt_id: str
    verkehrsmittel_text: str


class RecordListMatch(TypedDict, total=False):
    exclude: str
    lang: str
    limit: int
    offset: int
    order_by: str
    refine: str
    select: str
    where: str
