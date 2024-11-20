import {DatabaseProvider} from '@nozbe/watermelondb/react'
import {QueryClientProvider} from "@tanstack/react-query";
import {SplashScreen, Stack} from "expo-router";
import {Provider} from "inversify-react";
import React, {useCallback, useEffect} from "react";
import {StyleSheet} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {KeyboardProvider} from "react-native-keyboard-controller";

import queryClient from "@/core/react-query";
import database from "@/data/datasource/local/impl/watermelon";
import container from "@/di/container";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="index"/>
      </Stack>
    </Providers>
  );
}

function Providers({children}: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView
      style={styles.container}
    >
      <KeyboardProvider>
        <Provider container={() => container}>
          <DatabaseProvider database={database}>
            <QueryClientProvider client={queryClient}>
              <FirstTimeSetup>
                {children}
              </FirstTimeSetup>
            </QueryClientProvider>
          </DatabaseProvider>
        </Provider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  )
}

function FirstTimeSetup({children}: { children: React.ReactNode }) {
  const executor = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    executor().then().catch();
  }, [executor]);

  return children;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
