-- SwissFederalRailwaysSbb SDK exists test

local sdk = require("swiss-federal-railways-sbb_sdk")

describe("SwissFederalRailwaysSbbSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
