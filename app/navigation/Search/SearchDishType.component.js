import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import theme from '../../styles/theme.style.js';


const SearchDishType = ({dishType, selectOption, image}) => {

  return (
    // users can press the icon or the text below to select a dish type
     <TouchableOpacity
        onPress={selectOption}
        style={{ width:"10%"}}
     > 
      <Image
        source={image}
        resizeMode={'cover'}
        style={{width: 60, height: 60, borderRadius: 5}}
      />
      <Text testID="dishType" style={{ padding: "8%", color: theme.PRIMARY_COLOR_DARK}}>{dishType}</Text>
    </TouchableOpacity>

  );
}

export default SearchDishType;
