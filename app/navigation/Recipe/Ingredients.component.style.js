import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style.js';

export default StyleSheet.create({
  ingredientsContainer: {
    paddingTop: "2%",
    paddingBottom: "2%",
    paddingLeft: "5%",
    paddingRight: "5%",
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },

  ingredientLines: {
    fontFamily: theme.FONT_FAMILY_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: 'black',
 },

});