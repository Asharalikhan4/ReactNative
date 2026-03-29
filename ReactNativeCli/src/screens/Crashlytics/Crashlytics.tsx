import { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

const users = [];

const Crashlytics = () => {
  const { log, recordError, setAttribute, setAttributes, setUserId } = crashlytics();
  const [userCounts, setUserCounts] = useState<any>(null);

  async function onSignIn(user) {
    crashlytics().log('User signed in.');
    await Promise.all([
      setUserId(user.uid),
      setAttribute('credits', String(user.credits)),
      setAttributes({
        role: 'admin',
        followers: '13',
        email: user.email,
        username: user.username,
      }),
    ]);
  }

  function updateUserCounts() {
    crashlytics().log('Updating user count.');
    try {
      if (users) {
        // An empty array is truthy, but not actually true.
        // Therefore the array was never initialized.
        setUserCounts(userCounts.push(users.length));
      }
    } catch (error) {
      recordError(error);
      console.log(error);
    }
  }

  useEffect(() => {
    log('Crashlytics Screen Mounted.');
    if (users == true) setUserCounts([]);
    updateUserCounts();
  }, []);

  return (
    <View style={styles.crashlyticsContainer}>
      <Button
        title="Sign In"
        onPress={() =>
          onSignIn({
            uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
            username: 'Joaquin Phoenix',
            email: 'phoenix@example.com',
            credits: 42,
          })
        }
      />
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />

      <View style={styles.errorReportsView}>
        <View>
          <Text style={styles.errorReportsHeading}>Error Reports</Text>
        </View>
        <View>
          <Text>
            Even if you catch unexpected errors, in order for your app to
            recover and behave smoothly you can still report them through
            Crashlytics using the recordError method. This will also provide you
            with the associated stack trace.
          </Text>
        </View>
        <View>
          {userCounts ? (
            <View>
              <Text>
                There are currently {userCounts[userCounts.length - 1]} users.
              </Text>
            </View>
          ) : (
            <View>
              <Text>Unable to display user information.</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Crashlytics;

const styles = StyleSheet.create({
  crashlyticsContainer: {
    paddingHorizontal: 4,
  },
  errorReportsView: {
    marginTop: 10,
  },
  errorReportsHeading: {
    fontSize: 18,
    fontWeight: 600,
  },
});
