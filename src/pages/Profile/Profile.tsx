import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { NextPage } from 'next';
import React from 'react';

import { Container, Content } from './Profile.styles';

const Profile: NextPage = () => {
  useAuthenticatedRoute();

  return (
    <Container>
      <Content>
        <p>Profile Page</p>
      </Content>
    </Container>
  );
};

export default Profile;
