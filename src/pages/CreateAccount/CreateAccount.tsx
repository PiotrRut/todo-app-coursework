import { useCreateAccount } from '@lib/auth/auth';
import { RegisterRequestBody } from '@lib/auth/auth.models';
import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import { NextPage } from 'next';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Container, Form } from './CreateAccount.styles';

const CreateAccount: NextPage = () => {
  useRestrictedRoute();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createAccount } = useCreateAccount();

  const onSubmit: SubmitHandler<RegisterRequestBody> = (data) =>
    createAccount(
      data.firstName,
      data.lastName,
      data.email,
      data.plaintextPassword
    );

  return (
    <Container>
      <h1>Register for a free account today!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <input
            {...register('firstName', { required: true })}
            placeholder="First name *"
          />
          {errors.firstName?.type === 'required' && 'First name is required'}

          <input
            {...register('lastName', { required: true })}
            placeholder="Last name *"
          />
          {errors.lastName && 'Last name is required'}

          <input
            {...register('email', { required: true })}
            placeholder="Email address *"
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
    </Container>
  );
};

export default CreateAccount;
