import { View, Text, StatusBar, Image, StyleSheet,ScrollView ,FlatList} from "react-native";
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
export default function Home() {
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
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  return (
    <ScrollView>
      <View>
        <StatusBar backgroundColor={color.violet} />
        <Header />

        <SearchBox />
        <View style={{ width: "100%", alignSelf: "center", paddingTop: 15 }}>
          <Image
            style={{ height: hp(26), width: hp(54) }}
            source={require("../images/ScrollImage.png")}
          />
        </View>
        <Text style={styles.text}>All Categories</Text>
        <View>
          <View style={styles.categories}>
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
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal:15,
  },
  imageView: {
    borderWidth: 1,
    height: 74,
    width: 74,
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
