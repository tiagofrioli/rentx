import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold_Italic,
} from "@expo-google-fonts/archivo";
import { Home } from "./src/screens/Home";
import AppLoading from "expo-app-loading";

import theme from "./src/styles/theme";
import { ThemeProvider } from "styled-components/native";
import { CarDetails } from "./src/screens/CarDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CarDetails />
    </ThemeProvider>
  );
}
