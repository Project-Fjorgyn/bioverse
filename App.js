import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as usePTSerif, PTSerif_400Regular } from '@expo-google-fonts/pt-serif';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from './src/theme';
import { AuthContextProvider } from './src/context/auth.context';
import { Navigation } from './src/navigation';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [ptLoaded] = usePTSerif({
    PTSerif_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !ptLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
