import knexService from '../../../singletons/knex.service';
import { Site } from './site.model';

export default {
  getSiteById: async (id: string): Promise<Site | undefined> => {
    const data = await knexService('sites').where({ id }).select('*');

    if (data && data.length === 1) {
      return data[0];
    }

    return undefined;
  },
  getSitesByIds: async (ids: string[]): Promise<Site[]> => {
    const data = await knexService('sites').where('id', 'IN', ids).select('*');

    return data;
  },
  addSite: (site: Site) => {
    return knexService('sites').insert({
      ...site,
      updatedAt: new Date(),
    });
  },
};
