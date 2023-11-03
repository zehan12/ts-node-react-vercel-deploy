"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/api", (req, res) => {
    res.status(200).json({ info: "api is working threw serverless function" });
});
app.get("/", (req, res) => {
    res.end("TS NODE with CI CD");
});
exports.default = app;
//# sourceMappingURL=app.js.map