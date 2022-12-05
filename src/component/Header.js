import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';
export default function Header() {
  return (
    <View style={styles.parent}>
      <View>
        <Ionicons
          name="ios-menu"
          size={30}
          color="#781C45"
        />
      </View>
      <View>
        <Image
          style={{ height:hp(8), width:hp(8) }}
          source={require("../images/logo.png")}
        />
      </View>
      <View>
        <FontAwesome5 name="shopping-cart" size={26} color="#781C45" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
   borderBottomWidth:1,
    borderColor: "#DADADA",
    // height:80,
    alignItems:'center',
    padding:10,
    
  },
});