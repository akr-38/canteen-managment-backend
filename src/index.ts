// src/index.ts
import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, TypeScript with Express!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
