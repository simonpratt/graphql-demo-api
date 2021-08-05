export interface IdQuery<T> {
  id: T;
}

export interface Patch<T> {
  input: {
    id: string;
    patch: T;
  };
}

export interface Add<T> {
  input: {
    add: T;
  };
}

export interface Create<T> {
  input: {
    create: T;
  };
}

export interface Select<T> {
  input: {
    select: T;
  };
}
