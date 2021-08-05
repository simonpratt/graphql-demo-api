import { IdQuery } from '../shared/resolver.types';

import SecurityContext from '../../../core/securityContext';
import passService from '../../services/pass/pass.service';

interface GraphRequest {
  sc: SecurityContext;
}

const passResolvers = {
  Query: {
    pass: (_: any, args: IdQuery<string>, req: GraphRequest) => {
      const { id } = args;

      return passService.getPass(req.sc, id);
    },
  },
};

export default passResolvers;
