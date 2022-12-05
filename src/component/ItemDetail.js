import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";


export default function ItemDetail({ImgSrc,CategoryName,ItemDescription,Availability}) {
  return (
    <View style={styles.ParentView}>
    <View style={{width:"50%",justifyContent:'center',alignItems:'center'}}>
    <Image
    style={styles.imageStyle} 
    source={ImgSrc}/>
    </View>
    <View style={{width:"50%"}}>
        <Text>Category:{CategoryName}</Text>
        <Text style={{flexWrap:'wrap',fontWeight:"bold",fontSize:15}}>{ItemDescription}</Text>
        <Text>{Availability}</Text>
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
    ParentView:{
        flexDirection:'row',
        justifyContent:'space-between',
      
        paddingTop:20,
        width:'100%',
    },
    imageStyle:{
      height: hp(23), 
      width: hp(23) ,
    

    }
})