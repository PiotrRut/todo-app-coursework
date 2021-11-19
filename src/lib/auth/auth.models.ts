export type RegisterRequestBody = {
  email: string;
  plaintextPassword: string;
  firstName: string;
  lastName: string;
};

export type SignInRequestBody = {
  email: string;
  plaintextPassword: string;
};

export type SignInResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
};
