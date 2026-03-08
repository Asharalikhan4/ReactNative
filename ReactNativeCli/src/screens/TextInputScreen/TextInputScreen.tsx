import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from "react";

const TextInputScreen = () => {
  const [name, setName] = useState<string>("");
  return (
    <View>
      <Text>Text Input Screen</Text>
      <TextInput placeholder='Enter your name here' style={styles.textInputStyle} defaultValue={name} onChangeText={newName => setName(newName)} />
      <View>
        <Text>Your name: {name}</Text>
      </View>
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1
  }
});
