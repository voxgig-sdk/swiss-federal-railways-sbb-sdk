package utility

import "github.com/voxgig-sdk/swiss-federal-railways-sbb-sdk/core"

func featureAddUtil(ctx *core.Context, f core.Feature) {
	client := ctx.Client
	features := client.Features

	client.Features = append(features, f)
}
