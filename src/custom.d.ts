declare namespace Express {
  export interface Request {
    sc?: import('./core/securityContext').default;
  }
}
