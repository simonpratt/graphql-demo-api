class Error {
  private type: string;
  private message: string;

  public toString: () => string;

  constructor(type: string, message: string) {
    this.type = type;
    this.message = message || '';

    this.toString = function () {
      return `${this.type}${this.message ? ` ${this.message}` : ''}`;
    };
  }
}

class PermissionDeniedError extends Error {
  constructor(message: string) {
    super('Unauthorised', message);
  }
}

class ResourceNotFoundError extends Error {
  constructor(message: string) {
    super('Not Found', message);
  }
}

class OperationNotPermittedError extends Error {
  constructor(message: string) {
    super('Not Permitted', message);
  }
}

export default {
  PermissionDeniedError,
  ResourceNotFoundError,
  OperationNotPermittedError,
};
