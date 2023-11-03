"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const globals_1 = require("@jest/globals");
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const app_1 = tslib_1.__importDefault(require("../app"));
(0, globals_1.describe)("Test app.ts", () => {
    (0, globals_1.test)("Catch-all route", async () => {
        const res = await (0, supertest_1.default)(app_1.default).get("/api");
        (0, globals_1.expect)(res.body).toEqual({
            info: "api is working threw serverless function" });

    });
});
//# sourceMappingURL=app.test.js.map