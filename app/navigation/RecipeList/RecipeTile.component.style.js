import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style.js';


export default StyleSheet.create({
  recipeContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
 // style each recipe card or tile
  recipeCard: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: "3%",
    marginVertical: "2%",
    marginHorizontal: "3%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // position image - using flex
  recipeTileImage: {
    flex: 5,   
    justifyContent: 'center'
  },

  recipeTileInfo: {
    flex: 10, 
    justifyContent:'center', 
    alignItems: 'flex-start'
  },

  // style text that appears on the tile
  label: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY_PRIMARY
  },

  cuisine: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.FONT_SIZE_SMALL,
    fontFamily: theme.FONT_FAMILY_PRIMARY
  },

  // style arrow icon
  arrowIcon: {
    flex: 1,  
    justifyContent: 'center', 
    alignItems: 'flex-end'
  }
});