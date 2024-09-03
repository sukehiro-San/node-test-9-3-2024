import express, { Request, Response } from "express";
import rateLimiter from "./middlewares/RateLimiter";
import "reflect-metadata";
import { AppErrorMiddleware } from "./middlewares/AppError";
import { UserValidation } from "./middlewares/UserValidator";
const app = express();

app.use(express.json());
app.use(rateLimiter(10, 10000));
app.use(AppErrorMiddleware);
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello world!");
});

app.post("/user",UserValidation, (req: Request, res: Response) => {
  res.status(200).send("Successfully validated");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
