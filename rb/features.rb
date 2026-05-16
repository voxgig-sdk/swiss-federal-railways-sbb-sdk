# SwissFederalRailwaysSbb SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module SwissFederalRailwaysSbbFeatures
  def self.make_feature(name)
    case name
    when "base"
      SwissFederalRailwaysSbbBaseFeature.new
    when "test"
      SwissFederalRailwaysSbbTestFeature.new
    else
      SwissFederalRailwaysSbbBaseFeature.new
    end
  end
end
