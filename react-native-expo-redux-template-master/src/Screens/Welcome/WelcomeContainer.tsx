// WelcomeContainer.tsx

import React from "react";
import { Welcome } from "./Welcome";
import { useNavigation, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.WELCOME
>;

export const WelcomeContainer = ({ navigation }: WelcomeScreenNavigatorProps) => {
  const onNavigate = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: RootScreens.MAIN }],
    });
  };

  return <Welcome onNavigate={onNavigate} />;
};
