import {DatabaseProvider} from '@nozbe/watermelondb/react'
import {SplashScreen, Stack} from "expo-router";
import {Provider} from "inversify-react";
import React, {useCallback, useEffect} from "react";

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
    <Provider container={() => container}>
      <DatabaseProvider database={database}>
        <FirstTimeSetup>
          {children}
        </FirstTimeSetup>
      </DatabaseProvider>
    </Provider>
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
