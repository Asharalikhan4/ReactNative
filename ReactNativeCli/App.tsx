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
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import notifee, {
  AndroidCategory,
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
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
import Crashlytics from './src/screens/Crashlytics/Crashlytics';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Welcome',
      },
    },
    TextInput: {
      screen: TextInputScreen,
    },
    ScrollView: {
      screen: ScrollViewScreen,
    },
    FlatList: {
      screen: FlatListScreen,
    },
    SectionList: {
      screen: SectionListScreen,
    },
    PlatformSpecificCode: {
      screen: PlatformSpecificCode,
    },
    Images: {
      screen: ImagesScreen,
    },
    HandlingTouches: {
      screen: HandlingTouches,
    },
    Touchables: {
      screen: Touchables,
    },
    CustomFonts: {
      screen: CustomFonts,
    },
    Crashlytics: {
      screen: Crashlytics
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  const requestPermissionAndroid = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Android Permission Granted');
      getToken();
      // Alert.alert("Permission Granted");
    } else {
      // Alert.alert("Permission Denied");
    }
  };

  const requestPermissionIOS = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestPermissionAndroid();
    } else {
      requestPermissionIOS();
    }
  }, []);

  const onDisplayNotification = async remoteMessage => {
    // Request permissions (required for iOS)
    // await notifee.requestPermission()

    // Display a notification
    try {
      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'important_channel',
        name: 'Urgent Notifications',
        importance: AndroidImportance.HIGH,
        sound: 'default',
        vibration: true,
      });
      
      await notifee.displayNotification({
        title: remoteMessage?.notification?.title,
        body: remoteMessage?.notification?.body,
        android: {
          channelId,
          smallIcon: "ic_notification",
          largeIcon: "https://user-images.githubusercontent.com/14185925/86519462-cde1f000-be32-11ea-8ae6-cdec95754866.png",
          color: "#67dbfb",
          importance: AndroidImportance.HIGH,
          sound: 'default',
          vibrationPattern: [300, 500],
          category: AndroidCategory.MESSAGE,
          visibility: AndroidVisibility.PUBLIC,
          pressAction: {
            id: 'default',
          },
        },
      });
    } catch (error) {
      console.log("Push Notification Error", error);
    }
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onDisplayNotification(remoteMessage);
    });

    return unsubscribe;
  }, []);

  const getToken = async () => {
    console.log('getToken function');
    try {
      const token = await messaging().getToken();
      console.log('FCM token', token);
    } catch (error) {
      console.log('Token Error', error);
    }
  };

  return <Navigation onReady={() => BootSplash.hide({ fade: true })} />;
}

export default App;
