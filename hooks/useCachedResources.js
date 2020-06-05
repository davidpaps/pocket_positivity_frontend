import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
          "Roboto-BlackItalic": require("../assets/fonts/Roboto-BlackItalic.ttf"),
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
          "Roboto-BoldItalic": require("../assets/fonts/Roboto-BoldItalic.ttf"),
          "Roboto-Italic": require("../assets/fonts/Roboto-Italic.ttf"),
          "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
          "Roboto-LightItalic": require("../assets/fonts/Roboto-LightItalic.ttf"),
          "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
          "Roboto-MediumItalic": require("../assets/fonts/Roboto-MediumItalic.ttf"),
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
          "Roboto-ThinItalic": require("../assets/fonts/Roboto-ThinItalic.ttf"),
        });
      } catch (e) {
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
