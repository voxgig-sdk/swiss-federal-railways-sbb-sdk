package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewExportEntityFunc func(client *SwissFederalRailwaysSbbSDK, entopts map[string]any) SwissFederalRailwaysSbbEntity

var NewRecordEntityFunc func(client *SwissFederalRailwaysSbbSDK, entopts map[string]any) SwissFederalRailwaysSbbEntity

