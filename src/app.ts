import express, { Express, Request, Response } from "express";
import compression from "compression";
import helmet from "helmet";

const app: Express = express();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
    },
  })
);

app.use(compression());
app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ info: "api is working threw serverless function" });
});

app.get("/", (req: Request, res: Response) => {
  res.end("hello backend is back");
});

export default app;
