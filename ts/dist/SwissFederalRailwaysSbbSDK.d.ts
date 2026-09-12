import { ExportEntity } from './entity/ExportEntity';
import { RecordEntity } from './entity/RecordEntity';
export type * from './SwissFederalRailwaysSbbTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { SwissFederalRailwaysSbbEntityBase } from './SwissFederalRailwaysSbbEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class SwissFederalRailwaysSbbSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Export(entopts?: Record<string, any>): ExportEntity;
    Record(entopts?: Record<string, any>): RecordEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): SwissFederalRailwaysSbbSDK;
    tester(testopts?: any, sdkopts?: any): SwissFederalRailwaysSbbSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof SwissFederalRailwaysSbbSDK;
export { stdutil, config, BaseFeature, SwissFederalRailwaysSbbEntityBase, SwissFederalRailwaysSbbSDK, SDK, };
