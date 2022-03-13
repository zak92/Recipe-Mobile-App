import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style.js';

export default StyleSheet.create({
 
  searchContainer: {
    backgroundColor: "transparent",  
    justifyContent: "center", 
    padding: "8%", 
    width: "100%", 
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  },

  searchBarContainer: {
    borderRadius: 20, 
    color: "#000", 
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
  },

  // user input
  searchBarInput: {
    color: 'black',
    fontSize: theme.FONT_SIZE_MEDIUM
  },
  // position search bar
  searchBar : {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

 
});