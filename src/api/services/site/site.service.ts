import { v4 } from 'uuid';
import errors from '../../../core/errors';
import SecurityContext from '../../../core/securityContext';
import { Site } from './site.model';
import sitePersistence from './site.persistence';

export type SiteAddProps = Omit<Site, 'id'>;

export default {
  getSite: async (sc: SecurityContext, siteId: string): Promise<Site> => {
    const site = await sitePersistence.getSiteById(siteId);

    if (!site) {
      throw new errors.ResourceNotFoundError('Site could not be found');
    }

    await sc.checkPermission('SITE.VIEW').onTeam(site.teamId).forOne().withId(siteId).go();

    return site;
  },

  getSites: async (sc: SecurityContext, siteIds: string[]): Promise<Site[]> => {
    const sites = await sitePersistence.getSitesByIds(siteIds);

    return sites;
  },

  addSite: async (sc: SecurityContext, site: SiteAddProps): Promise<string> => {
    const id = v4();

    await sitePersistence.addSite({
      ...site,
      id,
    });

    return id;
  },
};
