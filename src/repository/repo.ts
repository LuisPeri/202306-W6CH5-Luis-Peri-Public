/* eslint-disable no-unused-vars */
export interface Repo<T extends { id: string | number }> {
  query: () => T[];
  queryById: (id: T['id']) => Promise<T>;
  search: (query: { kye: string; value: unknown }) => Promise<T[]>;
  create: (data: Omit<T, 'id'>) => Promise<T>;
  update: (id: T['id'], data: Partial<T>) => Promise<T>;
  delete: (id: T['id']) => Promise<void>;
}
