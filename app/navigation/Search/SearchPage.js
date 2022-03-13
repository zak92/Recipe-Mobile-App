import React, {useState, useEffect, useRef} from 'react';
import { Text, View, Modal, ScrollView, Pressable, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// check internet status
import NetInfo from '@react-native-community/netinfo';

// import icons and Roboto font family
import { MaterialIcons  } from '@expo/vector-icons';
import { useFonts, Roboto_400Regular, Roboto_400Regular_Italic } from '@expo-google-fonts/roboto'

// import components
import SearchDishType from './SearchDishType.component.js'
import SelectType from './SelectType.component.js'
import FoodSearchBar from './FoodSearchBar.component.js'

// import styles
import styles from './SearchPage.style.js';
import theme from '../../styles/theme.style.js';
import commonStyles from '../../styles/common.style.js';

// import json data 
import cuisineData from './cuisineTypes.json';
import dietData from './dietTypes.json';
import dishData from './dishTypes.json';
import Icons from './Icons.js';


export default function SearchPage({ navigation }) {

 // internet connection status
 const [internetConnected, setInternetConnected] = useState(true);

// every time internet state changes 
// add event listeners to subscribe for updates to the user’s network connection
 const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Connection type', state.type); // connection type(WiFi, cellular)
    console.log('Is connected?', state.isConnected); // is it actually physically connected
    console.log(state); // see all available info 
   
    /* also check for state.isInternetReachable, if necessary
       InternetReachable returns Boolean value that determines whether 
       or not the internet can be accessed using the current connection.
    */
    if (internetConnected != state.isConnected) { 
      setInternetConnected(state.isConnected)
    }
  });
  

 // get json data
 const cuisineTypes = cuisineData.cuisine_types;
 const dietTypes = dietData.diet_types;
 const dishTypes = dishData.dish_types;

  // recipe status and error messages
  const [recipes, setRecipes] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);


  // cuisine menu visibility
  const [cuisineMenuVisible, setCuisineMenuVisible] = useState(false);
  // diet menu visibility
  const [dietMenuVisible, setDietMenuVisible] = useState(false);

  // status of recipe retrieved from api 
  const [recipeRetrievedStatus, setRecipeRetrievedStatus] = useState(false);
  
 
  // api id and key
  const YOUR_APP_ID = "87a7f2a0"
  const YOUR_APP_KEY = "659d0ac8ade807769a7d30de2aaf105a"

  // set query parameters
  const [queryFood, setFoodQuery] = useState('chicken roast');
  const [queryDish, setDishQuery] = useState('Main course');
  const [queryCuisine, setCuisineQuery] = useState('Italian');
  const [queryDiet, setDietQuery] = useState('balanced');

  // get data from url
  const url =`https://api.edamam.com/search?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&q=${queryFood}&dishType=${queryDish}&cuisineType=${queryCuisine}&diet=${queryDiet}`
  // use fetch API to retrieve recipes
  useEffect(() => {
    (async () => {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.hits)
        setRecipes(json.hits)
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg(error);
      })
    })();
   
  }, [url]); /* pass url value as a dependency - If one of the dependencies
                has changed since the last time, the effect will run again
              */


   // set option chosen by user
   const [cuisineText, setCuisineText] = useState('Italian');
   const [dietText, setDietText] = useState('balanced');
   const [dishSelected, setDishSelected] = useState('Main course');

  // load fonts
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic
  });
  
   // show a list of recipes in a new page that match the parameters as set in the url    
   function showRecipes() {
    setRecipeRetrievedStatus(true);
  
    // go to 'Recipes' page after 5 seconds to ensure that the recipes were successfully retrieved
    setTimeout(() => {
      navigation.navigate('Recipes', {recipes});
      setRecipeRetrievedStatus(false);
    }, 5000);
  }
  

  if (!internetConnected) {
    return (
      <View style={commonStyles.errorContainer}>
        <Text style={commonStyles.error}>
          You are not connected to the internet 😮. To continue accessing this app, 
          please ensure that you have an active internet connection.
        </Text>
      </View>
    );
  }
  
 else {
  // if fonts are not loaded yet, show activity indicator
  if (!fontsLoaded) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
         <ActivityIndicator size="large" color={theme.SECONDARY_COLOR} />
      </View>
    );
  } 
  else {
  // if an error occurred or recipes were not retrieved successfully
    if (errorMsg || !Array.isArray(recipes)) {
      return (
        <View style={commonStyles.errorContainer}>
          <Text style={commonStyles.error}>
            There was an error while accessing the API 😮.
            Please try again later.
            </Text>
        </View>
      );
    }

    // user pressed 'Find Recipes' button
    else if (recipeRetrievedStatus == true) {
      return (
        <View style={styles.activityStatusContainer}>
          <View style={styles.activityStatus}>
          <ActivityIndicator size="large" color={theme.SECONDARY_COLOR} />
          <Text style={styles.activityStatusText}>Fetching Recipes</Text>
          </View>
        </View>
      );
      
    }

    // no errors
    else if (recipes !== []) {
      return (
        <SafeAreaView style={styles.mainContainer}>
        <StatusBar
        style="light" 
        backgroundColor={theme.PRIMARY_COLOR_DARK}
        />
          <ScrollView>
            <View>
              {/* search bar*/}
              <FoodSearchBar 
                value={queryFood}
                onChangeText={(value) => setFoodQuery(value)}
              />
              {/* select a dish type by tapping on the icon/image */}
              <View style={styles.selectDishContainer}>
                <Text style={styles.searchHeading}>Tap to Select a Dish Type</Text>
                <ScrollView  
                  horizontal={true} 
                  showsHorizontalScrollIndicator={false} 
                  contentContainerStyle={{ flexDirection:'row', paddingRight:"240%"}}>
                {/* load dish types and images from json files */}
                {dishTypes.map((dishType, i) => (
                  <SearchDishType key={i}
                    dishType={dishType.dish}
                    selectOption={() => {
                      setDishQuery(dishType.dish);
                      setDishSelected(dishType.dish);
                    }
                  }
                  image={Icons[dishType.image]}
                />
                
              ))}
            </ScrollView>
              {/* confirm what the user has selected */}
              <View style={styles.confirmationContainer}>
                <Text style={styles.confirmationText}>You have selected {dishSelected}</Text>
              </View>
            </View>

            
            <View style={styles.selectMenuContainer}>

              {/* select a cuisine type*/}
              <View>
                <Text style={styles.searchHeading}>Select a Cuisine</Text>
                {/* Menu appears as a modal */}
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={cuisineMenuVisible}
                  onRequestClose={() => {
                    setCuisineMenuVisible(!cuisineMenuVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <ScrollView style={{flex:1}}>
                      {/* load cuisine types from json file */}
                      {cuisineTypes.map((cuisine, i) => (
                          <SelectType key={i}
                            type={cuisine}
                            selectType={() => {
                              setCuisineQuery(cuisine);
                              setCuisineText(cuisine);
                              setCuisineMenuVisible(!cuisineMenuVisible)
                            }
                          }
                          />
                      ))}
                    </ScrollView>
                    </View>
                  </View>
                  </Modal> 
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setCuisineMenuVisible(true)}
                  >
                    <View style={{ flexDirection:"row", justifyContent: 'space-between'}}>
                      <Text style={styles.textStyle}>{cuisineText}</Text>
                      <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff"  />
                    </View>
                  </Pressable> 
                  </View>
              
              {/* select a diet type*/}
              <View>
                <Text style={styles.searchHeading}>Select a Diet</Text>
                <View>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={dietMenuVisible}
                  onRequestClose={() => {
                    setDietMenuVisible(!dietMenuVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <ScrollView style={{flex:1}}>
                      {/* load diet types from json file */}
                      {dietTypes.map((diet) => (
                          <SelectType key={diet.param}
                          type={diet.label}
                          selectType={() => {
                              setDietQuery(diet.param);
                              setDietText(diet.label);
                              setDietMenuVisible(!dietMenuVisible)
                            }
                          }
                          />
                      ))}
                    </ScrollView>
                    </View>
                  </View>
                </Modal> 
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setDietMenuVisible(true)}
                >
                  <View style={{ flexDirection:"row", justifyContent: 'space-between'}}>
                    <Text style={styles.textStyle}>{dietText}</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff"  />
                  </View>
                </Pressable> 
                </View>
              </View>
            </View>
        
            {/* get recipes button */}
            <TouchableOpacity
              onPress={() => showRecipes()}
              style={styles.findRecipesBtn}
            >
              <Text style={styles.findRecipesBtnText}>Find Recipes</Text>
            </TouchableOpacity>

            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
   }
 }
 
    
}

