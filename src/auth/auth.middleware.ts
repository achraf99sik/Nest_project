import { NextFunction } from 'express';

export function authMiddleware(req: any, res: any, next: NextFunction) {
    console.log('Request...');
    next();
  }
