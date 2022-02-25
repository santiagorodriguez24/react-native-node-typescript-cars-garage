import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'store/store';
import Platform from 'constants/platform';
import { Colors, Layouts, Spacing } from 'styles';

import { useFonts } from 'expo-font';
import { DotGothic16_400Regular } from '@expo-google-fonts/dotgothic16';
import { Montserrat_900Black } from '@expo-google-fonts/montserrat';

import { NavigationContainer } from '@react-navigation/native';

// import Garage from "screens/Garage";
import CarsNavigator from 'navigation/CarsNavigator';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_900Black,
    DotGothic16_400Regular,
    'Graphik-Regular': require('./assets/fonts/Graphik-Regular.otf'),
    'SoulCycle-Numbers-Straight': require('./assets/fonts/SoulCycle-Numbers-Straight.ttf'),
    'TitlingGothicFBCompressed-Medium': require('./assets/fonts/TitlingGothicFBCompressed-Medium.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView
            style={{
              ...Layouts.container,
              backgroundColor: Colors.Generic.lightGray,
              paddingTop: Platform.isAndroid
                ? StatusBar.currentHeight
                : Spacing.size0,
            }}
          >
            <StatusBar
              backgroundColor={Colors.Generic.lightGray}
              barStyle="dark-content"
              translucent={true}
            />
            <CarsNavigator />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
