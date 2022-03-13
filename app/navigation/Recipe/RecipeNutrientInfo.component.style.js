import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style.js';


export default StyleSheet.create({
  nutritionalInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  nutrient: {
    width: "25%",
    borderColor: theme.SECONDARY_COLOR_LIGHT,
    backgroundColor: theme.SECONDARY_COLOR_LIGHT,
    margin: 5,
    padding: "1%",
    borderWidth: 2,
  },

  details: {
    color: 'white',
    fontSize: theme.FONT_SIZE_MEDIUM,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  detailsLabel: {
    color: 'black',
    fontSize: theme.FONT_SIZE_MEDIUM,
    paddingTop: "2%",
    textAlign: 'center'
  },

});