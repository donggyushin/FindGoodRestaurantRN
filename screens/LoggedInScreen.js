import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const LoggedInScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Logged In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoggedInScreen;
