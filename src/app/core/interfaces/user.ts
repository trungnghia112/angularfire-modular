export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date | null;
  token?: string;
  uid?: string;
  displayName?: string;
  photoURL?: string;
  roles?: Roles;
  workspace_default?: string;
}
