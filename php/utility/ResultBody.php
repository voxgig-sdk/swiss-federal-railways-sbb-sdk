<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK utility: result_body

class SwissFederalRailwaysSbbResultBody
{
    public static function call(SwissFederalRailwaysSbbContext $ctx): ?SwissFederalRailwaysSbbResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
