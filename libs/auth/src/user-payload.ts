export interface IUserRole {
  role_id: string;

  role_name: string;

  short_form: string;
}

export class UserPayload {
  user_id: string;

  email: string;

  pin: string;

  sub: string;

  role: IUserRole;

  constructor(partial?: Partial<UserPayload>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
