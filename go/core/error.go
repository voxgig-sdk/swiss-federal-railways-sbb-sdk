package core

type SwissFederalRailwaysSbbError struct {
	IsSwissFederalRailwaysSbbError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewSwissFederalRailwaysSbbError(code string, msg string, ctx *Context) *SwissFederalRailwaysSbbError {
	return &SwissFederalRailwaysSbbError{
		IsSwissFederalRailwaysSbbError: true,
		Sdk:              "SwissFederalRailwaysSbb",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *SwissFederalRailwaysSbbError) Error() string {
	return e.Msg
}
