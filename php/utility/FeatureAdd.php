<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK utility: feature_add

class SwissFederalRailwaysSbbFeatureAdd
{
    public static function call(SwissFederalRailwaysSbbContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
