import { NextFunction, Request, Response } from "express";

function rateLimiter(
  limit: number,
  timeWindow: number
): (req: Request, res: Response, next: NextFunction) => void {
  const requests: { [key: string]: number[] } = {};
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip as string;
    const now = Date.now();
    if(!requests[ip]){
        requests[ip] =[];
    }
    requests[ip] = requests[ip].filter(
      (timestamp) => now - timestamp < timeWindow
    );

    if (requests[ip].length > limit) {
      res.status(429).send("Too many requests! Please try again later");
    }

    requests[ip].push(now);
    next();
  };
}

export default rateLimiter;
