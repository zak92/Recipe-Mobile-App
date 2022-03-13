import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style.js';

export default StyleSheet.create({

  // background image
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',  
    tintColor: "#000000"
  },

  // app name
  appName: {
    color: 'white',
    fontFamily: theme.FONT_FAMILY_APP_NAME,
    fontSize: 50,
    textAlign: 'center'
  },

  // search button
  searchRecipesBtn: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: "30%",
    width: "80%",
    borderRadius: 50,
    backgroundColor: theme.PRIMARY_COLOR_DARK,
    padding: "4%",
  },

  // search button text
  searchRecipesBtnText: {
    textAlign: "center",
    color: 'white',
    fontWeight: "bold",
    fontSize: theme.FONT_SIZE_LARGE
  },

  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.35
  }

});