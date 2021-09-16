import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'RobotoBlack': require('../assets/fonts/Roboto-Black.ttf'),
          'RobotoBlackItalic': require('../assets/fonts/Roboto-BlackItalic.ttf'),
          'RobotoBold': require('../assets/fonts/Roboto-Bold.ttf'),
          'RobotoBoldItalic': require('../assets/fonts/Roboto-BoldItalic.ttf'),
          'RobotoLight': require('../assets/fonts/Roboto-Light.ttf'),
          'RobotoLightItalic': require('../assets/fonts/Roboto-LightItalic.ttf'),
          'RobotoMedium': require('../assets/fonts/Roboto-Medium.ttf'),
          'RobotoItalic': require('../assets/fonts/Roboto-Italic.ttf'),
          'RobotoRegular': require('../assets/fonts/Roboto-Regular.ttf'),
          'RobotoThin': require('../assets/fonts/Roboto-Thin.ttf'),
          'RobotoThinItalic': require('../assets/fonts/Roboto-ThinItalic.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
