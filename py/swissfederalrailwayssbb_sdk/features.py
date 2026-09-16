# SwissFederalRailwaysSbb SDK feature factory

from swissfederalrailwayssbb_sdk.feature.base_feature import SwissFederalRailwaysSbbBaseFeature
from swissfederalrailwayssbb_sdk.feature.ratelimit_feature import SwissFederalRailwaysSbbRatelimitFeature
from swissfederalrailwayssbb_sdk.feature.retry_feature import SwissFederalRailwaysSbbRetryFeature
from swissfederalrailwayssbb_sdk.feature.test_feature import SwissFederalRailwaysSbbTestFeature
from swissfederalrailwayssbb_sdk.feature.timeout_feature import SwissFederalRailwaysSbbTimeoutFeature


_FEATURES = {
    "base": lambda: SwissFederalRailwaysSbbBaseFeature(),
    "ratelimit": lambda: SwissFederalRailwaysSbbRatelimitFeature(),
    "retry": lambda: SwissFederalRailwaysSbbRetryFeature(),
    "test": lambda: SwissFederalRailwaysSbbTestFeature(),
    "timeout": lambda: SwissFederalRailwaysSbbTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
