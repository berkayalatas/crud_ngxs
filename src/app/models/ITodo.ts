export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IPermission {
  userIds: number[];
  permissionType: Permissions;
}

export const defaultPermissions: IPermission[] = [
  {
    userIds: [1, 2, 3, 4],
    permissionType: Permissions.ADMIN,
  },
  {
    userIds: [5, 6, 7, 9],
    permissionType: Permissions.EDITOR,
  },
  {
    userIds: [8, 10],
    permissionType: Permissions.USER,
  },
];

export const enum Permissions {
  ADMIN = 0,
  EDITOR,
  USER,
}
