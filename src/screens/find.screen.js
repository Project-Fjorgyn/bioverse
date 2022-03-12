import React, { useContext } from 'react';
import { WebView } from 'react-native-webview';

import { InfoContext } from '../context/info.context';

export function FindScreen() {
  const { iNatLink } = useContext(InfoContext);
  return <WebView source={{ uri: iNatLink }} />;
}
