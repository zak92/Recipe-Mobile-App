import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style.js';

export default StyleSheet.create({
  recipePageContainer: {
    backgroundColor: "white",
    fontFamily: theme.FONT_FAMILY_PRIMARY,
  },

  recipeDetailsContainer: {
    padding: "6%",
    borderRadius: 50,
    backgroundColor: "white",
    marginTop: "-10%"
  },
  
  // style recipe name
  recipeName: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE,
    color: theme.SECONDARY_COLOR,
    fontFamily: theme.FONT_FAMILY_SECONDARY,
    textAlign: 'center',
    padding: "4%",
  },

  // style recipe source
  recipeSource :{
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
    padding: "2%"
  },

  // style the heading 'Ingredients'
  ingredientsHeading: {
    paddingTop: "5%",
    paddingBottom: "5%",
    color: theme.SECONDARY_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
  },

  // style the container containing additional recipe information
  additionalDetails: {
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  // style diet labels
  dietContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  dietLabel: {
    color: 'white',
    margin: "1%",
    padding: "4%",
    backgroundColor: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },

  dietHeadings:{
    color: 'black',
    paddingTop: "3%",
    paddingBottom: "3%",
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontStyle: 'italic'
  },

 servingsAmount: {
  color: 'black',
  fontSize: theme.FONT_SIZE_MEDIUM,
  fontStyle: 'italic',
  paddingTop: "4%",
 },
});