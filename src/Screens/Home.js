import { View, Text, StatusBar, Image, StyleSheet,ScrollView ,FlatList,Dimensions, TouchableOpacity} from "react-native";
import React from "react";
import color from "../theme/color";
import Header from "../component/Header.js";
import SearchBox from "../component/SearchBox.js";
import * as qs from 'qs'
import axios from "axios";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Heading from "../component/Heading";
import MyBagClubCard from "../component/MyBagClubCard";
import Carousel from 'react-native-reanimated-carousel';
const width = Dimensions.get('window').width;
export default function Home() {
  const [banner, setBanner] = React.useState([])
  const[maincategory,setMaincategory]=React.useState([])
  const getBanner=()=>{
  var data = qs.stringify({
    'banner': '1' 
  });
  var config = {
    method: 'post',
    url: 'https://mybagclub.net/api/api.php',
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Cookie': 'PHPSESSID=88642bac642a3a07df061d23628420c7'
    },
    data : data
  };
  
  axios(config)
  .then((response) => {
          if (response.data.success == 1) {
            setBanner(response.data.data)
          }
  })
}
const getCategories=()=>{
  var data = qs.stringify({
    'maincategory': '1' 
  });
  var config = {
    method: 'post',
    url: 'https://mybagclub.net/api/api.php',
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Cookie': 'PHPSESSID=e725fd8909efe482e620fa2f553c8ce1'
    },
    data : data
  };
  
  axios(config)
  .then((response) => {
          if (response.data.success == 1) {
            setMaincategory(response.data.data)
          }
  })
}
React.useEffect(() => {
  getBanner()
  getCategories()
}, [])
   const _renderItem=({item,index})=>{
        return (
          <View style={{
              borderRadius: 5,
              height: hp(26),
              marginLeft: 12,
              marginRight: 12, }}>
          <Image
            style={{ height: hp(26), width:'100%' }}
            source={{uri:item.Banner}}
            resizeMode={'contain'}
          />
          </View>

        )
    }
  return (
    <ScrollView>
      <View>
        <StatusBar backgroundColor={color.violet} />
        <Header />

        <SearchBox />
        <View style={{ width: "100%", alignSelf: "center", paddingTop: 15 }}>
          <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={banner}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={_renderItem}
                />
        </View>
        <Text style={styles.text}>All Categories</Text>
        <View>
          {/* <View style={styles.categories}>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("../images/necklace.png")}
              />
              <Text style={styles.TextView}>Necklaces</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("../images/accessories.png")}
              />

              <Text style={styles.TextView}>Accessories</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("../images/perfume.png")}
              />
              <Text style={styles.TextView}>Fragrances</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("../images/clothing.png")}
              />
              <Text style={styles.TextView}>Clothing</Text>
            </View>
          </View> */}
          <View style={styles.categories}>
          
          <FlatList
            horizontal={true}
  keyExtractor={(item) => item.id}
  data={maincategory}
  renderItem={({ item }) => (
    <>
    <TouchableOpacity>
    <View style={styles.categories}>
      <View style={styles.imageView}>
     
      <Image
            style={{ height: hp(10), width:'50%' }}
            source={{uri:item.icons}}
            resizeMode={'contain'}
          />
           <Text style={{fontSize:10,fontWeight:'bold',color:"#000"}}>{item.maincategory}</Text>
          </View>
          </View>
          </TouchableOpacity>
    </>
  )}
/>
</View>
          <Heading HeadLine="ON SALE" />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <MyBagClubCard
              Description="AFFINITI for Wm B Woods US 10AAAA ..."
              CategoryName="Women's Heels"
              OldPrice="$45"
              NewPrice="$56"
              imageSrc={require("../images/Demo_pic.png")}
            />
            <MyBagClubCard
              Description="Women's Heels"
              CategoryName="AFFINITI for Wm B Woods US 10AAAA ..."
              OldPrice="$45"
              NewPrice="$56"
              imageSrc={require("../images/Demo_pic.png")}
            />
          </View>
          <View style={styles.ShowAll}>
            <Text>Show All</Text>
          </View>
          <Heading HeadLine="RECOMMENDED" />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <MyBagClubCard
              Description="AFFINITI for Wm B Woods US 10AAAA ..."
              CategoryName="Women's Heels"
              OldPrice="$45"
              NewPrice="$56"
              imageSrc={require("../images/Demo_pic.png")}
              />
            <MyBagClubCard
              Description="Women's Heels"
              CategoryName="AFFINITI for Wm B Woods US 10AAAA ..."
              OldPrice="$45"
              NewPrice="$56"
              imageSrc={require("../images/Demo_pic.png")}

            />
          </View>
          <View style={styles.ShowAll}>
            <Text>Show All</Text>
          </View>
          <Heading HeadLine="DISCOUNT OFFER" />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <MyBagClubCard
              Description="AFFINITI for Wm B Woods US 10AAAA ..."
              CategoryName="Women's Heels"
              OldPrice="$45"
              NewPrice="$56"
              imageSrc={require("../images/Demo_pic.png")}
              />
            <MyBagClubCard
              Description="Women's Heels"
              CategoryName="AFFINITI for Wm B Woods US 10AAAA ..."
              OldPrice="$45"
              NewPrice="$56"
              imageSrc={require("../images/Demo_pic.png")}
            />
          </View>
          <View style={styles.ShowAll}>
            <Text>Show All</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 20,
    marginHorizontal:10
  },
  categories: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal:15,
  },
  imageView: {
    borderWidth: 1,
    height: 150,
    width: 150,
    backgroundColor:"#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 37,
    borderColor: "#781C45",
  },
  image: {
    height: hp(6),
    width: hp(6),
  },
  TextView: {
    fontSize: 8,
    fontWeight: "bold",
  },
  ShowAll:{
  flexDirection: "row",
  justifyContent: "flex-end",
  paddingHorizontal: 15,
  paddingTop: 10,
  paddingBottom: 30,
  }
});
