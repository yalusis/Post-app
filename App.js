import 'react-native-gesture-handler';
import AppNavigation from '../post-app/src/navigation/AppNavigation';
import AppLoading from 'expo-app-loading';
import {Provider} from 'react-redux'
import { useState } from 'react';
import { boostrap } from './src/boostrap';
import { NavigationContainer } from "@react-navigation/native";
import { store } from './src/store/index'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if(!isReady) {
    return (
      <AppLoading
      startAsync={boostrap}
      onError={err => console.log(err)}
      onFinish={() => setIsReady(true)} />
    )
  }

  return ( 
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer> 
    </Provider>
  );
}
