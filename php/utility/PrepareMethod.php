<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK utility: prepare_method

class SwissFederalRailwaysSbbPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(SwissFederalRailwaysSbbContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
