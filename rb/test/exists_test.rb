# SwissFederalRailwaysSbb SDK exists test

require "minitest/autorun"
require_relative "../SwissFederalRailwaysSbb_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = SwissFederalRailwaysSbbSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
