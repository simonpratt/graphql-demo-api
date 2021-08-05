import { Request, Response, NextFunction } from 'express';
import SecurityContext from '../core/securityContext';

const securityContextMiddleware = () => async (req: Request | any, res: Response, next: NextFunction) => {
  const sc = new SecurityContext('c2989158-1281-4a0a-9b34-1bbb09c71e0a');
  req.sc = sc;

  next();
};

export default securityContextMiddleware;
