import { View, Text, StatusBar ,StyleSheet} from 'react-native'
import React from 'react'
import Header from '../component/Header'
import color from '../theme/color';
import CategoryHeading from '../component/CategoryHeading.js';
import SearchBox from '../component/SearchBox';
import MyBagClubCard from '../component/MyBagClubCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function Categories() {
  return (
    <View>
      <ScrollView>
      <StatusBar backgroundColor={color.violet} />
      <Header />
      <CategoryHeading CategoryName="SHOES AND SANDALS" number="80" />
      <SearchBox/>
      <View style={styles.cardView}>
        <MyBagClubCard
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/Demo_pic.png")}
        />
        <MyBagClubCard 
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/Demo_pic.png")}
        />
        <MyBagClubCard 
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/Demo_pic.png")}
        />
        <MyBagClubCard 
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/Demo_pic.png")}
        />
         <MyBagClubCard 
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/Demo_pic.png")}
        />
        <MyBagClubCard 
          Description="AFFINITI for Wm B Woods US 10AAAA ..."
          CategoryName="Women's Heels"
          OldPrice="$45"
          NewPrice="$56"
          imageSrc={require("../images/Demo_pic.png")}
        />


        

      </View>
      </ScrollView>
    </View>
    
  );
}
const styles=StyleSheet.create({
  cardView:{
    flexDirection:'row',
   flexWrap:'wrap',
   justifyContent:'space-around',
   paddingHorizontal:10,
   marginTop:10,
  }
})