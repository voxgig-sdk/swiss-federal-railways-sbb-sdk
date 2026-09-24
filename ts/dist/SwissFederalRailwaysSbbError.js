"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwissFederalRailwaysSbbError = void 0;
class SwissFederalRailwaysSbbError extends Error {
    isSwissFederalRailwaysSbbError = true;
    sdk = 'SwissFederalRailwaysSbb';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.SwissFederalRailwaysSbbError = SwissFederalRailwaysSbbError;
//# sourceMappingURL=SwissFederalRailwaysSbbError.js.map