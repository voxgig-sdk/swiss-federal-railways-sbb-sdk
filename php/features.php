<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class SwissFederalRailwaysSbbFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new SwissFederalRailwaysSbbBaseFeature();
            case "test":
                return new SwissFederalRailwaysSbbTestFeature();
            default:
                return new SwissFederalRailwaysSbbBaseFeature();
        }
    }
}
