import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { NextPage } from 'next';
import React from 'react';

import { Container } from './Profile.styles';

const Profile: NextPage = () => {
  useAuthenticatedRoute();

  return (
    <Container>
      <p>Profile Page</p>
    </Container>
  );
};

export default Profile;
