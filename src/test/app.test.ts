import { describe, test, expect } from "@jest/globals";
import request from "supertest";
import app from "../app";

describe("Test app.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/api");
    expect(res.body).toEqual({
      info: "api is working threw serverless function",
    });
  });
});
