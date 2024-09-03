import { plainToClass } from "class-transformer";
import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User";
import { validate } from "class-validator";
import AppError from "../errors/AppError";

export async function UserValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = plainToClass(User, req.body);
  let errors = await validate(user);

  if (errors.length) {
    const errorsMessage = errors.map((error) =>
      Object.values(error.constraints || {}).join(", ")
    );
    next(new AppError(`User validation failed ${errorsMessage}`, 400));
  }
  next();
}
