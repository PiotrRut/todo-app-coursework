import ButtonLink from '@components/buttons/ButtonLink';
import { P } from '@components/Text';
import { signOut } from '@lib/auth/auth';
import { useAppContext } from '@lib/contexts/app';
import React, { FunctionComponent } from 'react';

import { AppBarProps } from './AppBar.models';
import { AppBarContainer } from './AppBar.styles';

const AppBar: FunctionComponent<AppBarProps> = () => {
  const { user } = useAppContext();

  return (
    <AppBarContainer>
      <P>
        Welcome back, {user?.firstName} {user?.lastName}
      </P>
      <div>
        <ButtonLink name="sign-out" onClick={signOut}>
          Sign out
        </ButtonLink>
      </div>
    </AppBarContainer>
  );
};

export default AppBar;
