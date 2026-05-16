
import { Context } from './Context'


class SwissFederalRailwaysSbbError extends Error {

  isSwissFederalRailwaysSbbError = true

  sdk = 'SwissFederalRailwaysSbb'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  SwissFederalRailwaysSbbError
}

