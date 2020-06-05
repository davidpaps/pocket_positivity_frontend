import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  Platform,
  StatusBar,
  Text,
  Button,
  StyleSheet,
  View,
} from "react-native";
import Login from "./screens/Login";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [auth, setAuth] = useState(false);

  const showLogin = () => {
    if (auth === true) {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      );
    } else {
      return <Login setAuth={setAuth} />;
    }
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    {
      console.log(auth);
    }
    return showLogin();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
