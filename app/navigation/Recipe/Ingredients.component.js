import React from 'react';
import { View, Text } from 'react-native';

import styles from './Ingredients.component.style.js';


// ingredients component
const Ingredients = ({ ingredients }) => {

    return (
      <View style={styles.ingredientsContainer}>
        <Text testID="ingredients" style={styles.ingredientLines}>{ingredients}</Text>
      </View>
    )
};

export default Ingredients;
