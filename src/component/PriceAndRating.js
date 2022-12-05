import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color'


export default function PriceAndRating({AprroxRating,SizeDescription,Price,Time,Rating}) {
  return (
    <View>
  <View style={{paddingVertical:20}}>
  <Text>SIZE:{SizeDescription }</Text>
  </View>
  <View style={styles.DescriptionRow}>
 <View style={styles.DescriptionRow1}>
 <View style={styles.item}>
  <Text style={styles.text}>{Price}</Text>
  </View>
  <View style={styles.item}>
  <Text>{Time}</Text>
    </View>
    <View style={styles.item}>
  <Text>{Rating}</Text>
  </View>
  
 </View>
 <View style={styles.DescriptionRow2}>
  <View style={styles.item}>
  <Text>MRP</Text>
  </View>
  <View style={styles.item}>
  <Text>Delivery Time</Text>
  </View>
  <View style={styles.item}>
  <Text>{AprroxRating}</Text>
  </View>
  </View>
  </View>
  </View> 
  )
}
const styles=StyleSheet.create({
  DescriptionRow1:{
    flexDirection:'row',
    
    
  },
  item:{
   
  flex:1,
  alignItems:'center',
  },
  DescriptionRow2:{
    flexDirection:'row',
   
    alignItems:'center',
  },
  DescriptionRow:{
    
    borderStyle:"dashed",
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:' #DFDFDF',
   paddingVertical:10,
  },
  text:{
    fontWeight:'bold',
    color:color.violet,
  }
})