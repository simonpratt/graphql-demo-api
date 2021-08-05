import knexService from '../../../singletons/knex.service';
import { Pass } from './pass.model';

export default {
  getPassById: async (id: string): Promise<Pass | undefined> => {
    const data = await knexService('passes').where({ id }).select('*');

    if (data && data.length === 1) {
      return data[0];
    }

    return undefined;
  },
  getPassesByIds: async (ids: string[]): Promise<Pass[]> => {
    const data = await knexService('passes').where('id', 'IN', ids).select('*');

    return data;
  },
  addPass: (pass: Pass) => {
    return knexService('passes').insert({
      ...pass,
      updatedAt: new Date(),
    });
  },
};
