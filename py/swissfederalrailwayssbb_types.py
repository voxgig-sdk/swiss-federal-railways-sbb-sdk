# Typed models for the SwissFederalRailwaysSbb SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Export:
    pass


@dataclass
class ExportLoadMatch:
    pass


@dataclass
class ExportListMatch:
    pass


@dataclass
class Record:
    abfahrtszeit_ist: Optional[str] = None
    abfahrtszeit_soll: Optional[str] = None
    ankunftszeit_ist: Optional[str] = None
    ankunftszeit_soll: Optional[str] = None
    betreiber_id: Optional[str] = None
    betreiber_name: Optional[str] = None
    betriebstag: Optional[str] = None
    durchfahrt: Optional[bool] = None
    faellt_aus: Optional[bool] = None
    fahrt_bezeichner: Optional[str] = None
    haltestellen_name: Optional[str] = None
    id: Optional[str] = None
    linien_id: Optional[str] = None
    linien_text: Optional[str] = None
    produkt_id: Optional[str] = None
    verkehrsmittel_text: Optional[str] = None


@dataclass
class RecordListMatch:
    abfahrtszeit_ist: Optional[str] = None
    abfahrtszeit_soll: Optional[str] = None
    ankunftszeit_ist: Optional[str] = None
    ankunftszeit_soll: Optional[str] = None
    betreiber_id: Optional[str] = None
    betreiber_name: Optional[str] = None
    betriebstag: Optional[str] = None
    durchfahrt: Optional[bool] = None
    faellt_aus: Optional[bool] = None
    fahrt_bezeichner: Optional[str] = None
    haltestellen_name: Optional[str] = None
    id: Optional[str] = None
    linien_id: Optional[str] = None
    linien_text: Optional[str] = None
    produkt_id: Optional[str] = None
    verkehrsmittel_text: Optional[str] = None

