import React from 'react';
import { WebView } from 'react-native-webview';

export function WebViewScreen({ route }) {
  return <WebView source={{ uri: route.params.uri }} />;
}
