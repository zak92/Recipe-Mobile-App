import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style.js';


export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },

  // position select menu containers for cuisine and diet type
  selectMenuContainer: {
    justifyContent: "center",
    padding: "8%",
  },

  selectDishContainer: {
    paddingLeft: "8%",
    paddingRight: "2%",
  },

  // position modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // display menu once the user clicks on it
  modalView: {
    margin: "1%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: "5%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.62,
    elevation: 4,
    width: "60%",
    height: "35%",
  },

  button: {
    borderRadius: 10,
    padding: "3%",
    width: "90%",
  },

  buttonOpen: {
    backgroundColor: theme.SECONDARY_COLOR_LIGHT,
  },
 
  textStyle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY_PRIMARY,
    color: "white",
    fontWeight: "bold",
    textAlign: "left", 
  },
 
  searchHeading: {
    color: 'black',
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY_PRIMARY,
    padding: "5%",

  },

  // style the 'Find Recipes' Button
  findRecipesBtn: {
    margin: "7%",
    width: "80%",
    borderRadius: 50,
    backgroundColor: theme.PRIMARY_COLOR_DARK,
    padding: "3%",
  },

  findRecipesBtnText: {
    textAlign: "center",
    color: 'white',
    fontWeight: "bold",
    fontSize: theme.FONT_SIZE_LARGE

  },

  // activity indicator container - position 
  activityStatusContainer: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: 'white'
  },

  // activity indicator container - style borders and colors
  activityStatus: {
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
    padding: "5%",

  },

  activityStatusText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: 'black',
    padding: "4%",

  },

  // conformation that the user has selected a specific dish type
  confirmationContainer: {  
    marginLeft:"8%",  
    marginRight:"8%", 
    width: "70%", 
    backgroundColor: theme.PRIMARY_COLOR_LIGHT, 
    borderRadius:20, 
  },

  confirmationText: {
    padding: "3%", 
    color: 'black', 
    textAlign:"center", 
  },



});

