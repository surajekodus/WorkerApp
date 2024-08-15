import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import WorkerProfile from '../components/Workers';
import workerData from '../data/workers.json';
import categoryData from '../data/categories.json';

function CategoriesScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProfiles, setFilteredProfiles] = useState(workerData);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let filtered = workerData;
    if (selectedCategory) {
      filtered = workerData.filter(
        worker => worker.Worker_Role === selectedCategory,
      );
    }

    if (searchText) {
      filtered = filtered.filter(worker =>
        worker.name.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    setFilteredProfiles(filtered);
  }, [selectedCategory, searchText]);

  const handleSearch = text => {
    setSearchText(text);
  };

  const handleFilterReset = () => {
    Alert.alert(
      'Reset Filter',
      'Are you sure you want to reset the filter?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          onPress: () => {
            setSelectedCategory(null);
            setSearchText('');
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.container}>
      <Header
        categories={categoryData}
        onCategorySelect={setSelectedCategory}
      />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={handleFilterReset}>
          <Icon name="filter-list" size={20} color="#888" />
        </TouchableOpacity>
      </View>
      <WorkerProfile profiles={filteredProfiles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 40,
    height: 50,
    backgroundColor: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{translateY: -10}],
  },
  filterButton: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5, 
  },
});

export default CategoriesScreen;
