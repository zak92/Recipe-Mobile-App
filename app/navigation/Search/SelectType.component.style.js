import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style.js';

export default StyleSheet.create({
  
  selectOption: { 
    color: 'black',  
    textAlign: 'left',
    padding: "5%"
  },
  
  selectText: { 
    color: 'black',  
    textAlign: 'left',
    fontFamily: theme.FONT_FAMILY_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM
  }
});

