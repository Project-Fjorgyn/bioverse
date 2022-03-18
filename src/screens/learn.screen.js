import React, { useContext } from 'react';
import { WebView } from 'react-native-webview';

import { InfoContext } from '../context/info.context';
import { SafeArea } from '../components/containers.components';

export function LearnScreen() {
  const { wikiLink } = useContext(InfoContext);
  return (
    <SafeArea>
      <WebView source={{ uri: wikiLink }} />
    </SafeArea>
  );
}
