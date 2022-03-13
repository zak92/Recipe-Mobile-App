// shared styles between pages

import { StyleSheet } from 'react-native';
import theme from './theme.style.js';


export default StyleSheet.create({
  // error messages styling - position, color, borders
  errorContainer: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    padding: "8%",
    backgroundColor: theme.SECONDARY_COLOR_LIGHT
  },
  error: {
    textAlign: 'center',
    borderRadius: 20, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: 'grey',
    fontSize: theme.FONT_SIZE_LARGE,
    color: 'black',
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "5%",
    paddingBottom: "5%",
  }
});