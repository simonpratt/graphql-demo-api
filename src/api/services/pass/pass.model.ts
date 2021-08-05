export type PassState = 'ACCEPTED' | 'REJECTED' | 'EXPIRED';

export interface Pass {
  id: string;
  siteId: string;
  userId: string;
  teamId: string;

  state: PassState;

  createdAt: Date;
  updatedAt: Date;
}
