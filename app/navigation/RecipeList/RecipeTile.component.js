import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons';

import styles from './RecipeTile.component.style.js';

const RecipeTile = ({ recipe, cuisine, image, viewIngredients }) => (
  
 
  // each tile or card will have an image of the dish, name of dish and cuisine type
  <View style={styles.recipeContainer}>
    <TouchableOpacity style={styles.recipeCard} onPress={viewIngredients}>
    <View style={{flex: 1, flexDirection:"row"}}>
      <View style={styles.recipeTileImage}>
        {/* image of the dish */}
        <Image
          source={{uri: image}}
          resizeMode={'cover'}
          style={{width: 80, height: 80, borderRadius: 5}}
        />
      </View>
      <View style={styles.recipeTileInfo}>
          {/* name of the dish */}
          <View><Text testID="recipe" style={styles.label}>{recipe}</Text></View>
          <View>
            {/* each dish may be of more than one cuisine type, therefore looping is needed */}
          {cuisine.map((cuisineType, i) => {
            //  properly format the name of the dish type - first letter must be capitalized
            return <Text key={i} style={styles.cuisine}>{cuisineType[0].toUpperCase() + cuisineType.substring(1)} cuisine</Text>
        })}
        </View>
      </View>
      
      {/* icon indicates that the tile can be pressed - enhances user experience */}
      <View  style={styles.arrowIcon}><MaterialIcons name="arrow-forward-ios" size={24} color="#5ce065" /></View>
      
    </View>
    </TouchableOpacity>
  </View>
    
);

export default RecipeTile;


