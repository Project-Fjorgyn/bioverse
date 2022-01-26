import React, { useContext } from 'react';

import { AppNavigator } from './app.navigator';
import { AuthNavigator } from './auth.navigator';
import { AuthContext } from '../context/auth.context';

export function Navigation() {
  const { user } = useContext(AuthContext);
  return user ? <AppNavigator /> : <AuthNavigator />;
}
