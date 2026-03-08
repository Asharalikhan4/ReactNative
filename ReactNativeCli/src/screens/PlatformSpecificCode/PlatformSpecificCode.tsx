/*
- There are two ways to organize and sperate the platform specific code.
1. Using Platform module
2. Using Platform Specific Extension.


Since Platform.select accept any value. you can also return the component according to platform.
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid'),
})();

<Component />;


2. 
When your platform-specific code is more complex, you should consider splitting the code out into separate files. React Native will detect when a file has a .ios. or .android. extension and load the relevant platform file when required from other components.
For example, say you have the following files in your project:
BigButton.ios.js
BigButton.android.js

You can then import the component as follows:
import BigButton from './BigButton';
React Native will automatically pick up the right file based on the running platform.
*/

import { View, Text, Platform, StyleSheet } from "react-native";

const PlatformSpecificCode = () => {
  console.log("Platform", Platform.OS);
  return (
    <View style={styles.container}>
      <Text>Platform sepcific View</Text>
    </View>
  );
};

export default PlatformSpecificCode;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "red"
      },
      android: {
        backgroundColor: "gray"
      },
      default: {
        backgroundColor: "blue"
      }
    })
  }
});