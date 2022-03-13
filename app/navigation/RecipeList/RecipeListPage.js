
import { Text, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import React from 'react';

import { useFonts, Roboto_400Regular, Roboto_400Regular_Italic } from '@expo-google-fonts/roboto'

// import recipeTile component
import RecipeTile from './RecipeTile.component.js'
import styles from '../../styles/common.style.js';
import theme from '../../styles/theme.style.js';

export default function RecipePage({ route, navigation }) {

  // load fonts
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic
  });

  // recipeTile component
  const renderItem = ({ item }) => (
    <RecipeTile 
      recipe={item.recipe.label} 
      image={item.recipe.image}
      cuisine={item.recipe.cuisineType}
      viewIngredients={() => navigation.navigate('Recipe',  {item})}
    />
  );

  // get recipe information  from search page
  const { recipes} = route.params;
  
  // if fonts are not loaded, show activity indicator
  if (!fontsLoaded) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color={theme.SECONDARY_COLOR} />
      </View>
    );
  } 

  else {
    // if the recipes object is not empty
      if (Object.keys(recipes).length > 0) {
        return (
            <SafeAreaView>
              <View style={{paddingTop:10, backgroundColor:'white'}}>
                {/* Display tiles using a FlatList */}
                <FlatList
                LisHeaderComponent={
                  <>
                  <Text style={{backgroundColor:'black'}}>Recipe list Screen</Text>
                  </>
                  }
                  data={recipes}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.recipe.uri}
                />
              </View>
            </SafeAreaView>
        )
      }
    // if the recipes object is empty
    else if (Object.keys(recipes).length == 0) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>
            There are no recipes that match you search query😮.
            Please try new search queries.
          </Text>
        </View>
      )
    }
  }     
}

