import knexService from '../../../singletons/knex.service';
import { User } from './user.model';

export default {
  getUserById: async (id: string): Promise<User | undefined> => {
    const data = await knexService('users').where({ id }).select('*');

    if (data && data.length === 1) {
      return data[0];
    }

    return undefined;
  },
  getUsersByIds: async (ids: string[]): Promise<User[]> => {
    const data = await knexService('users').where('id', 'IN', ids).select('*');

    return data;
  },
  addUser: (user: User) => {
    return knexService('users').insert({
      ...user,
      updatedAt: new Date(),
    });
  },
};
