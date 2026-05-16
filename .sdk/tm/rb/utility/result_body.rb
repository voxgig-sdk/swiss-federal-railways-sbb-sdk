# SwissFederalRailwaysSbb SDK utility: result_body
module SwissFederalRailwaysSbbUtilities
  ResultBody = ->(ctx) {
    response = ctx.response
    result = ctx.result
    if result && response && response.json_func && response.body
      result.body = response.json_func.call
    end
    result
  }
end
