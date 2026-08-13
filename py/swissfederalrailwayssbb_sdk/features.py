# SwissFederalRailwaysSbb SDK feature factory

from swissfederalrailwayssbb_sdk.feature.base_feature import SwissFederalRailwaysSbbBaseFeature
from swissfederalrailwayssbb_sdk.feature.test_feature import SwissFederalRailwaysSbbTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SwissFederalRailwaysSbbBaseFeature(),
        "test": lambda: SwissFederalRailwaysSbbTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
