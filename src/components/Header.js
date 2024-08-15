import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Header({categories, onCategorySelect}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (Worker_Role, id) => {
    console.log('Worker_Role-', Worker_Role);
    setSelectedCategory(id);
    onCategorySelect(Worker_Role);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="notifications" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleCategoryPress(item.Worker_Role, item.id)}
            style={[
              styles.categoryButton,
              {
                backgroundColor:
                  item.id === selectedCategory ? '#FFA500' : '#007bff',
              },
            ]}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',   
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'column',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,  
  },
  iconButton: {
    padding: 10,  
  },
  searchInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 10,
  },
  categoryList: {
    paddingVertical: 5,
  },
  categoryButton: {
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
