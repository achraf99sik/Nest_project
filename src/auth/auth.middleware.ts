import { NextFunction } from 'express';

export function AuthMiddleware(req: any, res: any, next: NextFunction) {
    console.log('Request...');
    next();
  }
