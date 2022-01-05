import ButtonLink from '@components/buttons/ButtonLink';
import HelpDialog from '@components/HelpDialog';
import { P } from '@components/Text';
import { signOut } from '@lib/auth/auth';
import { useAppContext } from '@lib/contexts/app';
import React, { FunctionComponent, useState } from 'react';
import { MdHelpOutline, MdLogout } from 'react-icons/md';

import { AppBarProps } from './AppBar.models';
import { AppBarContainer, StyledRow } from './AppBar.styles';

const AppBar: FunctionComponent<AppBarProps> = () => {
  const { user } = useAppContext();

  const [helpDialogOpen, setHelpDialogOpen] = useState(false);

  return (
    <>
      <AppBarContainer>
        <P>
          Welcome back, {user?.firstName} {user?.lastName}
        </P>
        <StyledRow>
          <ButtonLink name="help" onClick={() => setHelpDialogOpen(true)}>
            <MdHelpOutline size={20} />
          </ButtonLink>
          <ButtonLink name="sign-out" onClick={signOut}>
            <MdLogout />
          </ButtonLink>
        </StyledRow>
      </AppBarContainer>

      <HelpDialog
        open={helpDialogOpen}
        onClose={() => setHelpDialogOpen(false)}
      />
    </>
  );
};

export default AppBar;
