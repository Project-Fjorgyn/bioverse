import React, { useContext } from 'react';
import { WebView } from 'react-native-webview';

import { InfoContext } from '../context/info.context';

export function LearnScreen() {
  const { wikiLink } = useContext(InfoContext);
  return <WebView source={{ uri: wikiLink }} />;
}
