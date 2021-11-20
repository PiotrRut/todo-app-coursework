import { useSignIn } from '@lib/auth/auth';
import { SignInRequestBody } from '@lib/auth/auth.models';
import { AppRoutes } from '@lib/constants';
import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Container, Form } from './Login.styles';

const Login: NextPage = () => {
  useRestrictedRoute();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useSignIn();

  const onSubmit: SubmitHandler<SignInRequestBody> = (data) =>
    signIn(data.email, data.plaintextPassword);

  return (
    <Container>
      <h1>Log in!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <input
            {...register('email', { required: true })}
            placeholder="Email *"
          />
          {errors.email?.type === 'required' && 'Email is required'}

          <input
            {...register('plaintextPassword', { required: true })}
            placeholder="Password *"
            type="password"
          />
          {errors.plaintextPassword?.type === 'required' &&
            'Password is required'}

          <input type="submit" />
        </Form>
      </form>

      <p>
        no account? no problem -{' '}
        <Link href={AppRoutes.SignUp}>create one now</Link>
      </p>
    </Container>
  );
};

export default Login;
