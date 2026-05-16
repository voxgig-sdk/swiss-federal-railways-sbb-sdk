-- SwissFederalRailwaysSbb SDK error

local SwissFederalRailwaysSbbError = {}
SwissFederalRailwaysSbbError.__index = SwissFederalRailwaysSbbError


function SwissFederalRailwaysSbbError.new(code, msg, ctx)
  local self = setmetatable({}, SwissFederalRailwaysSbbError)
  self.is_sdk_error = true
  self.sdk = "SwissFederalRailwaysSbb"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function SwissFederalRailwaysSbbError:error()
  return self.msg
end


function SwissFederalRailwaysSbbError:__tostring()
  return self.msg
end


return SwissFederalRailwaysSbbError
