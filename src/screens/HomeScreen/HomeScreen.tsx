import { Text, View, SectionList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const homeScreenData = [
  {
    data: ['TextInput', 'ScrollView'],
  },
  {
    title: 'List',
    data: ['FlatList', 'SectionList'],
  },
  {
    data: ["PlatformSpecificCode"]
  },
  {
    data: ["Images"]
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SectionList
        sections={homeScreenData}
        renderItem={({ item }) => (
          <Text style={styles.item} onPress={() => navigation.navigate(item)}>
            {item}
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section?.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
