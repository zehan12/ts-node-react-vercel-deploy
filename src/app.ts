import express, { Express, Request, Response } from "express";
import compression from "compression";
import path from "path";

const app: Express = express();

app.use(compression());
app.use(express.static(path.join(__dirname, "/../build")));

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ info: "api is working threw serverless function" });
});

app.get("/", (req: Request, res: Response) => {
    res.sendFile("../build/index.html");
});

export default app;
