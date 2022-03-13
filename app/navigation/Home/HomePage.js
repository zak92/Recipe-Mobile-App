import React  from 'react';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground, Dimensions, ActivityIndicator, StatusBar } from 'react-native';

import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Lobster_400Regular } from '@expo-google-fonts/lobster';

import styles from './HomePage.style.js';
import theme from '../../styles/theme.style.js';

export default function HomePage({ navigation }) {

  // get device width and height
  const deviceWidth = Dimensions.get('window').width
  const deviceHeight = Dimensions.get('window').height

  // load fonts
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Lobster_400Regular
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
      <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
      <StatusBar
        style="light" 
        backgroundColor={theme.PRIMARY_COLOR_DARK}
      />
      {/* background image */}
      <ImageBackground
        source={require('../../assets/home.jpg')}
        style={[styles.backgroundImage, {width: deviceWidth, height: deviceHeight}]}>
        <View style={styles.overlay}/>
          {/* name of app */}
          <Text style={styles.appName}>Recipe Magic</Text>
          {/* navigate to search page */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Search Recipes')}
            style={styles.searchRecipesBtn}
          >
            <Text style={styles.searchRecipesBtnText}>Search for Recipes</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

