import { IdQuery } from '../shared/resolver.types';

import userService from '../../services/user/user.service';
import SecurityContext from '../../../core/securityContext';

interface GraphRequest {
  sc: SecurityContext;
}

const userResolvers = {
  Query: {
    user: (_: any, args: IdQuery<string>, req: GraphRequest) => {
      const { id } = args;

      return userService.getUser(req.sc, id);
    },
  },
};

export default userResolvers;
