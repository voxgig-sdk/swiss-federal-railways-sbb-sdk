<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK utility: result_headers

class SwissFederalRailwaysSbbResultHeaders
{
    public static function call(SwissFederalRailwaysSbbContext $ctx): ?SwissFederalRailwaysSbbResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
