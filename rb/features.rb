# SwissFederalRailwaysSbb SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module SwissFederalRailwaysSbbFeatures
  def self.make_feature(name)
    case name
    when "base"
      SwissFederalRailwaysSbbBaseFeature.new
    when "ratelimit"
      SwissFederalRailwaysSbbRatelimitFeature.new
    when "retry"
      SwissFederalRailwaysSbbRetryFeature.new
    when "test"
      SwissFederalRailwaysSbbTestFeature.new
    when "timeout"
      SwissFederalRailwaysSbbTimeoutFeature.new
    else
      SwissFederalRailwaysSbbBaseFeature.new
    end
  end
end
