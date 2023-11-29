import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";

const RootStackParamList = {
  [RootScreens.MAIN]: undefined,
  [RootScreens.WELCOME]: undefined,
  [RootScreens.WELCOME_2]: undefined,
  [RootScreens.WELCOME_3]: undefined,
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.WELCOME_2}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.WELCOME_3}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export { ApplicationNavigator };
