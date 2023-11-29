// Welcome.tsx

import React, { useState, useEffect } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";

export const Welcome = (props: {
  onNavigate: () => void;
}) => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNextScreen = () => {
    // Navigate to Home after the third Welcome screen
    if (currentScreen === 3) {
      props.onNavigate();
    } else {
      setCurrentScreen((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // Reset screen to the first one when the app restarts
    setCurrentScreen(1);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{i18n.t(LocalizationKey.WELCOME)} {currentScreen}</Text>
      <StatusBar style="auto" />
      <Button onPress={handleNextScreen}>
        {i18n.t(LocalizationKey.NEXT)}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
