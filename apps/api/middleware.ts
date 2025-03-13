import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const decoded = jwt.verify(token, process.env.JWT_PUBLIC_KEY as string, {
    algorithms: ["RS256"],
  });

  if (!decoded) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const userId = (decoded as any).sub;
  req.userId = userId;
  next();
}
