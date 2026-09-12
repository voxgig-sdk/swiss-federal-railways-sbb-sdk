import { SwissFederalRailwaysSbbEntityBase } from '../SwissFederalRailwaysSbbEntityBase';
import type { SwissFederalRailwaysSbbSDK } from '../SwissFederalRailwaysSbbSDK';
import type { Control } from '../types';
import type { RecordType, RecordListMatch } from '../SwissFederalRailwaysSbbTypes';
declare class RecordEntity extends SwissFederalRailwaysSbbEntityBase<RecordType> {
    constructor(client: SwissFederalRailwaysSbbSDK, entopts: any);
    make(this: RecordEntity): RecordEntity;
    list(this: any, reqmatch?: RecordListMatch, ctrl?: Control): Promise<RecordEntity[]>;
}
export { RecordEntity };
