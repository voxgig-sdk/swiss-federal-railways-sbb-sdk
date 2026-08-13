# SwissFederalRailwaysSbb SDK utility: make_context

from projectname_sdk.core.context import SwissFederalRailwaysSbbContext


def make_context_util(ctxmap, basectx):
    return SwissFederalRailwaysSbbContext(ctxmap, basectx)
