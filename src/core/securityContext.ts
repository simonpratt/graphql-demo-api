export type ResourceType = 'ALL' | 'ONE';

const runCheck = (role: string, teamId: string, resourceType: ResourceType, resourceId: string) => () => {
  console.log('Checking...', role, teamId, resourceType, resourceId);
};

const idCheck = (role: string, teamId: string) => (id: string) => ({
  go: runCheck(role, teamId, 'ONE', id),
});

const resourceCheckOne = (role: string, teamId: string) => () => ({
  withId: idCheck(role, teamId),
});

const resourceCheckAll = (role: string, teamId: string) => () => ({
  go: runCheck(role, teamId, 'ALL', undefined),
});

const teamCheck = (role: string) => (teamId: string) => ({
  forAll: resourceCheckAll(role, teamId),
  forOne: resourceCheckOne(role, teamId),
});

const roleCheck = (role: string) => ({
  onTeam: teamCheck(role),
});

// class ResourceCheckerFinal

// class PermissionCheckerId {
//   private role: string;
//   private resourceType: ResourceType;
//   private teamId: string;
//   private resourceId: string;
// }

// class PermissionCheckerResourceType {
//   private role: string;
//   private teamId: string;

//   constructor(_role: string, _teamId: string) {
//     this.role = _role;
//     this.teamId = _teamId;
//   }

//   public forOne(resourceType: ResourceType) {
//     if (resourceType)
//   }
// }

// class PermissionCheckerTeamId {
//   private role: string;

//   constructor(_role: string) {
//     this.role = _role;
//   }

//   public forTeam(teamId: string) {
//     return new PermissionCheckerResourceType(this.role, teamId);
//   }
// }

export default class SecurityContext {
  public userId: string;
  public teamId: string;

  constructor(userId: string) {
    this.userId = userId;
    this.teamId = 'edea407a-24c8-4e18-8cf0-6b629328fb1c';
  }

  public checkPermission(role: string) {
    return roleCheck(role);
  }
}
