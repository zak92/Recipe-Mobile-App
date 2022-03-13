
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import React from 'react';

import styles from './SelectType.component.style.js';

const SelectType = ({type, selectType}) => {
 
    // options for selecting cuisine and diet type
    return (
        <View style={styles.selectOption}>
          <TouchableOpacity
              onPress={selectType}
          > 
          <Text testID="type" style={styles.selectText}>{type}</Text>
          </TouchableOpacity>
        </View>
    );
  
}

export default SelectType;



