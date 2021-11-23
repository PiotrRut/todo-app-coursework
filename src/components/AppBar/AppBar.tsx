import ButtonLink from '@components/buttons/ButtonLink';
import { signOut } from '@lib/auth/auth';
import { useAppContext } from '@lib/contexts/app';
import React, { FunctionComponent } from 'react';

import { AppBarProps } from './AppBar.models';
import { AppBarContainer } from './AppBar.styles';

const AppBar: FunctionComponent<AppBarProps> = () => {
  const { user } = useAppContext();

  return (
    <AppBarContainer>
      <div>
        Welcome back, {user?.firstName} {user?.lastName}
      </div>
      <div>
        <ButtonLink name="sign-out" onClick={signOut}>
          Sign out
        </ButtonLink>
      </div>
    </AppBarContainer>
  );
};

export default AppBar;
