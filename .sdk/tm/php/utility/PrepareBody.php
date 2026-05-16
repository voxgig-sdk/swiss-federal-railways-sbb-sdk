<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK utility: prepare_body

class SwissFederalRailwaysSbbPrepareBody
{
    public static function call(SwissFederalRailwaysSbbContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
