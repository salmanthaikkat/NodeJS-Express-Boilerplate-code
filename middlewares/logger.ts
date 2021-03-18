import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method}  ${req.protocol}://${req.get('host')}${req.url}`);
  next();
};

export default logger;
