import { signOut } from '@lib/auth/auth';
import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { NextPage } from 'next';
import React from 'react';

const Dashboard: NextPage = () => {
  useAuthenticatedRoute();
  return (
    <>
      <button onClick={signOut}>Log out</button>
      <p>Dashboard</p>
    </>
  );
};

export default Dashboard;
