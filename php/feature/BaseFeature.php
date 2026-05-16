<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK base feature

class SwissFederalRailwaysSbbBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(SwissFederalRailwaysSbbContext $ctx, array $options): void {}
    public function PostConstruct(SwissFederalRailwaysSbbContext $ctx): void {}
    public function PostConstructEntity(SwissFederalRailwaysSbbContext $ctx): void {}
    public function SetData(SwissFederalRailwaysSbbContext $ctx): void {}
    public function GetData(SwissFederalRailwaysSbbContext $ctx): void {}
    public function GetMatch(SwissFederalRailwaysSbbContext $ctx): void {}
    public function SetMatch(SwissFederalRailwaysSbbContext $ctx): void {}
    public function PrePoint(SwissFederalRailwaysSbbContext $ctx): void {}
    public function PreSpec(SwissFederalRailwaysSbbContext $ctx): void {}
    public function PreRequest(SwissFederalRailwaysSbbContext $ctx): void {}
    public function PreResponse(SwissFederalRailwaysSbbContext $ctx): void {}
    public function PreResult(SwissFederalRailwaysSbbContext $ctx): void {}
    public function PreDone(SwissFederalRailwaysSbbContext $ctx): void {}
    public function PreUnexpected(SwissFederalRailwaysSbbContext $ctx): void {}
}
