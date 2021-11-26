import AppBar from '@components/AppBar';
import useIsSignedIn from '@lib/hooks/useIsSignedIn';
import React, { FunctionComponent } from 'react';

import { LayoutContainer, LayoutInner } from './Layout.styles';

const Layout: FunctionComponent = ({ children }) => {
  const isSignedIn = useIsSignedIn();

  return (
    <LayoutContainer>
      {isSignedIn && <AppBar />}
      <LayoutInner>{children}</LayoutInner>
    </LayoutContainer>
  );
};

export default Layout;
