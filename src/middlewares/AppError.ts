import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

export function AppErrorMiddleware(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode || 500;

  res.send(statusCode).json({
    status: "error",
    statusCode,
    message: err.message,
  });
}
