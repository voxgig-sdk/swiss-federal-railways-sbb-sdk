# SwissFederalRailwaysSbb SDK utility: feature_add
module SwissFederalRailwaysSbbUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
