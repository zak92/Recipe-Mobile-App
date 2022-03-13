import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import Ingredients from './Ingredients.component.js'
import RecipeNutrientInfo from './RecipeNutrientInfo.component.js'

import styles from './RecipePage.style.js';
import theme from '../../styles/theme.style.js';

import { 
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold_Italic,
} from '@expo-google-fonts/roboto'


export default function RecipePage({ route }) {
  // get recipe object from previous page
  const { item } = route.params;

  // get width and height of device
  const deviceWidth = Dimensions.get('window').width
  const deviceHeight = Dimensions.get('window').height

  // load fonts
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold_Italic
  })

  
  // if fonts are not loaded, show activity indicator
  if (!fontsLoaded) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color={theme.SECONDARY_COLOR} />
      </View>
    );
  } 
  else {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
        <StatusBar
          style="light" 
          backgroundColor={theme.PRIMARY_COLOR_DARK}
        />
      <ScrollView>
        <View style={styles.recipePageContainer}>
          <View>
            {/* display image of dish */}
            <Image
                source={{uri: item.recipe.image}}
                resizeMode={'cover'}
                style={{width: deviceWidth, height: deviceHeight / 3}}
              />
          </View>
          {/* display recipe name and source */}
          <View style={styles.recipeDetailsContainer}>

            <Text style={styles.recipeName}>{item.recipe.label}</Text>
            <Text style={styles.recipeSource}>By {item.recipe.source}</Text>

            {/* display ingredients of recipe */}
            <Text style={styles.ingredientsHeading}>Ingredients</Text>
            {item.recipe.ingredientLines.map((ingredient, i) => (
                <Ingredients
                ingredients={ingredient}
                key={i}
              />
            ))}
            <Text style={styles.servingsAmount}>Servings: {item.recipe.yield}</Text>
        
            {/* display diet labels */}
            <View style={styles.additionalDetails}>
              <Text style={styles.dietHeadings}>Diet</Text>
                <View style={styles.dietContainer}>
                  {/* use a loop since a recipe can have multiple diet labels */}
                {item.recipe.dietLabels.map((dietLabel, i) => {
                    return <Text style={styles.dietLabel} key={i} >{dietLabel}</Text>
                })}
                </View>
            </View>
          
            {/* for the component below, horizontal scrolling is enabled */}
            <ScrollView  
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={{  flexDirection:'row', paddingRight:"125%"}}>
                {/* component that displays limited nutrient information  */}
                <RecipeNutrientInfo 
                calories={item.recipe.calories.toFixed()}
                energy={item.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed()}
                protein={item.recipe.totalNutrients.PROCNT.quantity.toFixed()}
                carbs={item.recipe.totalNutrients.CHOCDF.quantity.toFixed()}
                sodium={item.recipe.totalNutrients.NA.quantity.toFixed()}
                cholesterol={item.recipe.totalNutrients.CHOLE.quantity.toFixed()}
                />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    );

  }
}

