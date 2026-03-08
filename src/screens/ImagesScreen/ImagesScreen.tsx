import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const ImagesScreen = () => {
  return (
    <ScrollView>
      <Text>Images Screen</Text>
      <View>
        <Text>Image from Assets folder.</Text>
        <Image
          source={require('../../../assets/ReactNative.png')}
          style={styles.imageStyle}
        />
      </View>
      <View>
        <Text>Image from URL</Text>
        <Image
          source={{
            uri: 'https://jdoutstanding.com/wp-content/uploads/2024/05/react-native-logo.png',
          }}
          style={{ width: 400, height: 400 }}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <ImageBackground source={{ uri: 'https://jdoutstanding.com/wp-content/uploads/2024/05/react-native-logo.png' }} style={{width: '100%', height: '100%'}}>
            <Text style={{ color: "white"}}>Inside</Text>
          </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default ImagesScreen;

const styles = StyleSheet.create({
  imageStyle: {},
});
