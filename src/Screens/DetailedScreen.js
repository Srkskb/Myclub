import { View, Text, StatusBar ,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color'
import ItemDetail from '../component/ItemDetail'
import Header from '../component/Header'
import PriceAndRating from '../component/PriceAndRating'
import { Ionicons } from '@expo/vector-icons';

export default function DetailedScreen() {
  return (
    <View>

    <StatusBar backgroundColor={color.violet}/>
    <Header/>
    <View style={styles.SubParent}>
   <ItemDetail
   ImgSrc={require("../images/Demo_pic.png")}
   CategoryName="Women's Heels"
   ItemDescription="AFFINITI for Wm B Woods US 10AAAA Taupe Pink Blue Genuine Reptile Pump Shoe VTG"
   Availability="in stock"
   />
   
   <PriceAndRating
   AprroxRating="100+ Ratings"
   SizeDescription="Women's Shoes US 10"
   Price="$46"
   Time="90 min"
   Rating="4.1"/>
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
  SubParent:{
    marginHorizontal:10,
  }
})