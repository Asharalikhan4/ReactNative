/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useEffect } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BootSplash from 'react-native-bootsplash'; 
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import TextInputScreen from './src/screens/TextInputScreen/TextInputScreen';
import ScrollViewScreen from './src/screens/ScrollViewScreen/ScrollViewScreen';
import FlatListScreen from './src/screens/ListScreen/FlatListScreen/FlatListScreen';
import SectionListScreen from './src/screens/ListScreen/SectionListScreen/SectionListScreen';
import PlatformSpecificCode from './src/screens/PlatformSpecificCode/PlatformSpecificCode';
import ImagesScreen from './src/screens/ImagesScreen/ImagesScreen';
import HandlingTouches from './src/screens/HandlingTouches/HandlingTouches';
import Touchables from './src/screens/HandlingTouches/Touchables';
import CustomFonts from './src/screens/CustomFonts/CustomFonts';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Welcome"
      }
    },
    TextInput: {
      screen: TextInputScreen
    },
    ScrollView: {
      screen: ScrollViewScreen
    },
    FlatList: {
      screen: FlatListScreen
    },
    SectionList: {
      screen: SectionListScreen
    },
    PlatformSpecificCode: {
      screen: PlatformSpecificCode
    },
    Images: {
      screen: ImagesScreen
    },
    HandlingTouches: {
      screen: HandlingTouches
    },
    Touchables: {
      screen: Touchables
    },
    CustomFonts: {
      screen: CustomFonts
    }
  }
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
    <Navigation onReady={() => BootSplash.hide({ fade: true })} />
  );
};

export default App;
