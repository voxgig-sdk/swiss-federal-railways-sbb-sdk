# SwissFederalRailwaysSbb SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

SwissFederalRailwaysSbbUtility.registrar = ->(u) {
  u.clean = SwissFederalRailwaysSbbUtilities::Clean
  u.done = SwissFederalRailwaysSbbUtilities::Done
  u.make_error = SwissFederalRailwaysSbbUtilities::MakeError
  u.feature_add = SwissFederalRailwaysSbbUtilities::FeatureAdd
  u.feature_hook = SwissFederalRailwaysSbbUtilities::FeatureHook
  u.feature_init = SwissFederalRailwaysSbbUtilities::FeatureInit
  u.fetcher = SwissFederalRailwaysSbbUtilities::Fetcher
  u.make_fetch_def = SwissFederalRailwaysSbbUtilities::MakeFetchDef
  u.make_context = SwissFederalRailwaysSbbUtilities::MakeContext
  u.make_options = SwissFederalRailwaysSbbUtilities::MakeOptions
  u.make_request = SwissFederalRailwaysSbbUtilities::MakeRequest
  u.make_response = SwissFederalRailwaysSbbUtilities::MakeResponse
  u.make_result = SwissFederalRailwaysSbbUtilities::MakeResult
  u.make_point = SwissFederalRailwaysSbbUtilities::MakePoint
  u.make_spec = SwissFederalRailwaysSbbUtilities::MakeSpec
  u.make_url = SwissFederalRailwaysSbbUtilities::MakeUrl
  u.param = SwissFederalRailwaysSbbUtilities::Param
  u.prepare_auth = SwissFederalRailwaysSbbUtilities::PrepareAuth
  u.prepare_body = SwissFederalRailwaysSbbUtilities::PrepareBody
  u.prepare_headers = SwissFederalRailwaysSbbUtilities::PrepareHeaders
  u.prepare_method = SwissFederalRailwaysSbbUtilities::PrepareMethod
  u.prepare_params = SwissFederalRailwaysSbbUtilities::PrepareParams
  u.prepare_path = SwissFederalRailwaysSbbUtilities::PreparePath
  u.prepare_query = SwissFederalRailwaysSbbUtilities::PrepareQuery
  u.result_basic = SwissFederalRailwaysSbbUtilities::ResultBasic
  u.result_body = SwissFederalRailwaysSbbUtilities::ResultBody
  u.result_headers = SwissFederalRailwaysSbbUtilities::ResultHeaders
  u.transform_request = SwissFederalRailwaysSbbUtilities::TransformRequest
  u.transform_response = SwissFederalRailwaysSbbUtilities::TransformResponse
}
