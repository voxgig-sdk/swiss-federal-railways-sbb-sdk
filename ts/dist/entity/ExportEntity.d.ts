import { SwissFederalRailwaysSbbEntityBase } from '../SwissFederalRailwaysSbbEntityBase';
import type { SwissFederalRailwaysSbbSDK } from '../SwissFederalRailwaysSbbSDK';
import type { Control } from '../types';
import type { Export, ExportLoadMatch, ExportListMatch } from '../SwissFederalRailwaysSbbTypes';
declare class ExportEntity extends SwissFederalRailwaysSbbEntityBase<Export> {
    constructor(client: SwissFederalRailwaysSbbSDK, entopts: any);
    make(this: ExportEntity): ExportEntity;
    load(this: any, reqmatch?: ExportLoadMatch, ctrl?: Control): Promise<ExportEntity>;
    list(this: any, reqmatch?: ExportListMatch, ctrl?: Control): Promise<ExportEntity[]>;
}
export { ExportEntity };
