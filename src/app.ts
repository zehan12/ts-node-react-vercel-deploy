import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ info: "api is working threw serverless function" });
});

app.get("/", (req: Request, res: Response) => {
  res.end("Hello from backend");
});

export default app;
