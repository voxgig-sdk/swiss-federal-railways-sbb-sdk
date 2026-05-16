<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class SwissFederalRailwaysSbbMakeContext
{
    public static function call(array $ctxmap, ?SwissFederalRailwaysSbbContext $basectx): SwissFederalRailwaysSbbContext
    {
        return new SwissFederalRailwaysSbbContext($ctxmap, $basectx);
    }
}
