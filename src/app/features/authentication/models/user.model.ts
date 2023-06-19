export interface ILogin {
    email: string;
    password: string;
}

export interface IUserSignup {
    firstName: string,
    lastName: string,
    gender: number,
    email: string,
    password: string,
    confirmPassword: string
}

export interface IChangePassword {
    email: string,
    oldPassword: string,
    newPassword: string
  }