const ROOT_TEMPLATE = `
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import Providers from './providers';
import Router from './router';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on "/modal" keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    } else {
    }
  }, [loaded]);

  if (!loaded) {
    return <></>;
  }


  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <Providers>
      <Router />
    </Providers>
  );
}

`
module.exports = { ROOT_TEMPLATE };