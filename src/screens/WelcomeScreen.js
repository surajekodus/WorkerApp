import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
        }}>
        Welcome
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
