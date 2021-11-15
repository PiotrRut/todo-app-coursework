import { signOut } from '@lib/auth/auth';
import { NextPage } from 'next';
import React from 'react';

const Dashboard: NextPage = () => {
  return (
    <>
      <button onClick={signOut}>Log out</button>
      <p>Dashboard</p>
    </>
  );
};

export default Dashboard;
