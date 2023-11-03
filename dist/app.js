"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const path_1 = tslib_1.__importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, compression_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "/../build")));
app.get("/api", (req, res) => {
    res.status(200).json({ info: "api is working threw serverless function" });
});
app.get("/", (req, res) => {
    res.sendFile("../build/index.html");
});
exports.default = app;
//# sourceMappingURL=app.js.map