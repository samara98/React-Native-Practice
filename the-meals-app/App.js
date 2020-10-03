import React, { useState } from 'react';
// import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
// import { useScreens } from 'react-native-screens';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import store from './store';

// useScreens();
enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
