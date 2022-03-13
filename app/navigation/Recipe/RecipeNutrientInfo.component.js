import React from 'react';
import { View, Text } from 'react-native';

import styles from './RecipeNutrientInfo.component.style.js';

/* component thats displays limited nutrient information - 
   calories, carbs, energy, protein, sodium, cholesterol
*/
const RecipeNutrientInfo = ({ calories, carbs, energy, protein, sodium, cholesterol }) => {

  return (
    <View style={styles.nutritionalInfo}>
      <View style={styles.nutrient}>
        <Text testID="calories" style={styles.details}>{calories}</Text>
        <Text style={styles.detailsLabel}>Calories</Text>
      </View>
      <View style={styles.nutrient}>
        <Text testID="energy" style={styles.details}>{energy}</Text>
        <Text style={styles.detailsLabel}>Energy(kcal)</Text>
      </View>
      <View style={styles.nutrient}>
        <Text testID="protein" style={styles.details}>{protein}</Text>
        <Text style={styles.detailsLabel}>Protein(g)</Text>
      </View>
      <View style={styles.nutrient}>
        <Text testID="carbs" style={styles.details}>{carbs}</Text>
        <Text style={styles.detailsLabel}>Carbs(g)</Text>
      </View>
      <View style={styles.nutrient}>
        <Text testID="sodium" style={styles.details}>{sodium}</Text>
        <Text style={styles.detailsLabel}>Sodium(mg)</Text>
      </View>
      <View style={styles.nutrient}>
        <Text testID="cholesterol" style={styles.details}>{cholesterol}</Text>
        <Text style={styles.detailsLabel}>Cholesterol(mg)</Text>
      </View>
   </View>

  )
};

export default  RecipeNutrientInfo;