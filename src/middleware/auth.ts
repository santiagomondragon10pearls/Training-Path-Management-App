//@ts-check
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import defaultConfig from '../config/default';
const jwtSecret = defaultConfig.jwtSecret;

export interface CustomRequest extends Request {
  user?: {
    id?: any;
    role?: any;
  };
}

const auth = (req: CustomRequest, res: Response, next: NextFunction) => {
  // Get token from header
  const token = req.header('x-auth-token');

  //Check if token
  if (!token) {
    return res.status(401).json({ errors: [{ msg: 'No token, denied' }] });
  }

  // Verify token
  try {
    const decoded: any = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(400).json({ errors: [{ msg: 'Token is not valid' }] });
  }
};

export default auth;
