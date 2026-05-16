<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK exists test

require_once __DIR__ . '/../swissfederalrailwayssbb_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = SwissFederalRailwaysSbbSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
