# SwissFederalRailwaysSbb SDK utility: make_context
require_relative '../core/context'
module SwissFederalRailwaysSbbUtilities
  MakeContext = ->(ctxmap, basectx) {
    SwissFederalRailwaysSbbContext.new(ctxmap, basectx)
  }
end
