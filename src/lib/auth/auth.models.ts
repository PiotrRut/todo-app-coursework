export type RegisterRequestBody = {
  email: string;
  plainTextPassword: string;
  firstName: string;
  lastName: string;
};

export type SignInRequestBody = {
  email: string;
  plainTextPassword: string;
};

export type SignInResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
};
