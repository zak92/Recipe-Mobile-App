import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './app/navigation/Home/HomePage';
import SearchPage from './app/navigation/Search/SearchPage';
import RecipeListPage from './app/navigation/RecipeList/RecipeListPage';
import RecipePage from './app/navigation/Recipe/RecipePage';



const Stack = createNativeStackNavigator();

export default function App() {
  // enable navigation between pages
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomePage} />
        <Stack.Screen name="Search Recipes" component={SearchPage} />
        <Stack.Screen name="Recipes" component={RecipeListPage} />
        <Stack.Screen name="Recipe" component={RecipePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






