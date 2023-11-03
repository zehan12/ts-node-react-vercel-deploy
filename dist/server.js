"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _app_1 = tslib_1.__importDefault(require("./app"));
const PORT = process.env.PORT || 4000;
const server = _app_1.default.listen(PORT, () => {
    const addressInfo = server.address();
    console.log(`⚡️[server]: is running on http://${addressInfo["address"]}:${PORT}`);
});
// Handle shutdown gracefully
process.on("SIGTERM", () => {
    server.close(() => {
        console.log("Server closed");
        process.exit(0);
    });
});
//# sourceMappingURL=server.js.map