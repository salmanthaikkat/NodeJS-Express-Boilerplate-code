import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    const secret = process.env.TOKEN_SECRET;

    jwt.verify(token, secret as Secret, (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      next();
    });
  } catch (e) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }
};

export default validateToken;