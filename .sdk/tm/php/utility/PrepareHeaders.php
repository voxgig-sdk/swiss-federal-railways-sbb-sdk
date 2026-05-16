<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK utility: prepare_headers

class SwissFederalRailwaysSbbPrepareHeaders
{
    public static function call(SwissFederalRailwaysSbbContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
