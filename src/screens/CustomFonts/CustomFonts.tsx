import { View, Text, StyleSheet } from 'react-native';
import { INDIEFLOWER_FONTS, ROBOTO_FONTS } from '../../../config/fonts';

const CustomFonts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Custom Fonts</Text>
      <View style={{ marginBottom: 15}}>
        <Text>
          On iOS the font family name is read from inside the font file itself
          (its PostScript name), while on Android it's the filename without the
          extension. That's why sometime font work in Android but not on IOS.
        </Text>
        <Text>
          The fontFamily string must match the font's PostScript name on iOS.
          You can check it using Font Book on macOS or fontdrop.info online.
          Name your .ttf files the same as their PostScript name to keep things
          consistent across both platforms.
        </Text>
      </View>
      
      <View style={{ marginBottom: 15}}>
        <Text>The Safe Solution — Make Both Platforms Work</Text>
        <Text style={styles.font3}>
          The trick is to name your .ttf files exactly the same as their
          PostScript name. That way Android (filename) and iOS (PostScript name)
          both match.
        </Text>
      </View>

      <View>
        <Text style={styles.font1}>Custom Fonts Screen</Text>
        <Text style={styles.font2}>Ashar Ali Khan</Text>
      </View>
    </View>
  );
};

export default CustomFonts;

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  heading: {
    fontFamily: ROBOTO_FONTS.bold,
    fontSize: 22
  },
  font1: {
    fontFamily: 'Roboto-Bold',
  },
  font2: {
    fontFamily: INDIEFLOWER_FONTS.regular,
  },
  font3: {
    fontFamily: "Roboto-Light"
  }
});
