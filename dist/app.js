"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const app = (0, express_1.default)();
app.use(helmet_1.default.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"] } }));


app.use((0, compression_1.default)());
app.get("/api", (req, res) => {
    res.status(200).json({ info: "api is working threw serverless function" });
});
app.get("/", (req, res) => {
    res.status(200).json({ success: "backend is working" });
});
exports.default = app;
//# sourceMappingURL=app.js.map