import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loadingText}>맛집찾아줘</Text>
      <View style={styles.bottomView}>
        <Text>made by @신동규</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loadingText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 200,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default LoadingScreen;
