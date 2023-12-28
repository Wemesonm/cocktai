import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler"; //I didn't see utility yet
import { SafeAreaProvider } from "react-native-safe-area-context"; //I didn't see utility yet

import { SafeAreaView } from "react-native";
import { Router } from "./src/Router/Router";

import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

import { Provider } from "react-redux";
import { store } from "./src/context/store";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Router />
          </Provider>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
}
