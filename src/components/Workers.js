import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

const Workers = ({profiles}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={profiles}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          console.log('item---', item);
          return (
            <View style={styles.profileContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={{uri: item.profileImage}}
                  style={styles.profileImage}
                />
                <Image
                  source={{uri: item.countryFlag}}
                  style={styles.countryFlag}
                />
              </View>
              <Text style={styles.profileName}>{item.name}</Text>
            </View>
          );
        }}
        numColumns={4}
      />
    </View>
  );
};

export default Workers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  profileImageContainer: {
    position: 'relative', // Positioning context for the flag
    width: 80,
    height: 80,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  countryFlag: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 20,
    borderRadius: 5,
  },
  profileName: {
    color: 'black',
    marginTop: 5,
  },
});
