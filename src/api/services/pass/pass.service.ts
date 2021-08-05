import { v4 } from 'uuid';
import errors from '../../../core/errors';
import SecurityContext from '../../../core/securityContext';
import { Pass } from './pass.model';
import passPersistence from './pass.persistence';

export type PassAddProps = Omit<Pass, 'id'>;

export default {
  getPass: async (sc: SecurityContext, passId: string): Promise<Pass> => {
    const pass = await passPersistence.getPassById(passId);

    if (!pass) {
      throw new errors.ResourceNotFoundError('Pass could not be found');
    }

    await sc.checkPermission('PASS.VIEW').onTeam(pass.teamId).forOne().withId(passId).go();

    return pass;
  },

  getPasses: async (sc: SecurityContext, passIds: string[]): Promise<Pass[]> => {
    const passes = await passPersistence.getPassesByIds(passIds);

    return passes;
  },

  addPass: async (sc: SecurityContext, pass: PassAddProps): Promise<string> => {
    const id = v4();

    await passPersistence.addPass({
      ...pass,
      id,
    });

    return id;
  },
};
