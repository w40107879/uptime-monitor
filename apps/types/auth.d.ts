export type LogInType = {
  email: string;
  password: string;
};

export type RegisterType = LogInType

export type AuthResponse = {
  access_token: string;
}