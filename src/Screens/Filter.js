import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import color from "../theme/color"
import { MaterialIcons } from '@expo/vector-icons';
export default function Filter() {
  return (
    <View>
   <StatusBar backgroundColor={color.violet}/>
   <View style={{flexDirection:'row'}}>
   <View>
    <MaterialIcons name="arrow-back" size={24} color="black" />
    </View>
    <View style={{flexDirection:'column'}}>
    <View>
        <Text>Select Sort</Text>
    </View>
    <View>
        <Text>Best Selling</Text>
    </View>
    </View>
  
   </View>
    </View>
  )
}