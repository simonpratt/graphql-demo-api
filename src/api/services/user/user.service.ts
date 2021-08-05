import { v4 } from 'uuid';
import errors from '../../../core/errors';
import SecurityContext from '../../../core/securityContext';
import { User } from './user.model';
import userPersistence from './user.persistence';

export type UserAddProps = Omit<User, 'id'>;

export default {
  getUser: async (sc: SecurityContext, userId: string): Promise<User> => {
    const user = await userPersistence.getUserById(userId);

    await sc.checkPermission('USER.VIEW').onTeam('123').forOne().withId(userId).go();

    if (!user) {
      throw new errors.ResourceNotFoundError('User could not be found');
    }

    return user;
  },

  getUsers: async (sc: SecurityContext, userIds: string[]): Promise<User[]> => {
    const users = await userPersistence.getUsersByIds(userIds);

    return users;
  },

  addUser: async (sc: SecurityContext, user: UserAddProps): Promise<string> => {
    const id = v4();

    await userPersistence.addUser({
      ...user,
      id,
    });

    return id;
  },
};
