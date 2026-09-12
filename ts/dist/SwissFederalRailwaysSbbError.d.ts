import { Context } from './Context';
declare class SwissFederalRailwaysSbbError extends Error {
    isSwissFederalRailwaysSbbError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { SwissFederalRailwaysSbbError };
