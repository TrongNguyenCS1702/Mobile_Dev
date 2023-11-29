import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Button, Heading } from "native-base";
import { User } from "@/Services";

export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Home = (props: IHomeProps) => {
  const { data, isLoading } = props;

  return (
    <ImageBackground
      source={require("D:\\HCMUT\\HK231\\Mobile_Dev\\react-native-expo-redux-template-master\\images\\welcome_image.png")}
      style={styles.backgroundImage}
      resizeMode="contain"
    >
      <StatusBar style="light" />
      <View style={styles.container}>
        {isLoading ? (
          <HStack space={2} justifyContent="center">
            {/* Loading spinner and message */}
            {/* ... */}
          </HStack>
        ) : (
          <View style={styles.contentContainer}>
            {/* Empty content for now */}
          </View>
        )}

        {/* Login and Sign Up buttons */}

        <HStack space={4} justifyContent="center" mt={4} bottom={-250}>
          <Button size="md" variant="outline" onPress={() => console.log("Login pressed")}>
            <Heading color="#5EAB07" fontSize="md">
              {i18n.t(LocalizationKey.LOGIN)}
            </Heading>
          </Button>
          <Button size="md" variant="outline" onPress={() => console.log("Sign Up pressed")}>
            <Heading color="#5EAB07" fontSize="md">
              {i18n.t(LocalizationKey.SIGN_UP)}
            </Heading>
          </Button>
        </HStack>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20, // Adjust this value to control the distance from the bottom
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
