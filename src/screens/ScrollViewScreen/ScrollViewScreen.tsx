import { Text, View, StyleSheet, ScrollView } from 'react-native';

const ScrollViewScreen = () => {
  const boxes = new Array(7).fill(null);
  return (
    <ScrollView>
      {boxes.map((_, i) => (
        <View
          key={i}
          style={styles.bigBox}
        />
      ))}
    </ScrollView>
  );
};

export default ScrollViewScreen;

const styles = StyleSheet.create({
  bigBox: {
    height: 200,
    width: 200,
    borderWidth: 2,
    backgroundColor: 'tomato',
    marginBottom: 16,
  },
});
