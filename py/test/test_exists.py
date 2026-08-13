# SwissFederalRailwaysSbb SDK exists test

import pytest
from swissfederalrailwayssbb_sdk import SwissFederalRailwaysSbbSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = SwissFederalRailwaysSbbSDK.test(None, None)
        assert testsdk is not None
