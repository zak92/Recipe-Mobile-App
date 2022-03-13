
import styles from './FoodSearchBar.component.style.js';
import theme from '../../styles/theme.style.js';
import { View } from 'react-native';
import React from 'react';
import { SearchBar } from 'react-native-elements';

const FoodSearchBar = ({onChangeText, value}) => {
  
  return (
    <View style={styles.searchBar}>
      {/* Create search bar */}
    <SearchBar
      containerStyle={styles.searchContainer}
      inputContainerStyle={styles.searchBarContainer}
      inputStyle={styles.searchBarInput}
      placeholder="Search food"
      searchIcon={{ size: 24, color: theme.SECONDARY_COLOR }}
      onChangeText={onChangeText}
      value={value}
      testID="search"
    />
  </View>
  )
}

export default FoodSearchBar;