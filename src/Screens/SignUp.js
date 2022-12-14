import { View, Text, StatusBar, StyleSheet } from "react-native";
import React, { useState } from "react";
import color from "../theme/color";
import InputBox from "../component/InputBox";
import BackButton from "../component/Backbutton";
import VioletButton from "../component/VioletButton";
import { ScrollView } from "react-native-gesture-handler";
import Input2 from "../component/inputs/Input2";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import * as qs from 'qs'
export default function SignUp({ navigation }) {
  const[Name ,setName]=useState("")
  const[surname,setSurname]=useState("")
  const[Email,setEmail]=useState("")
  const[Password,setPassword]=useState("")
  const[Mobile,setMobile]=useState("")
  const[address,setAddress]=useState("")
  const [loadingtypeoverlay, setLoadingtypeoverlay] = useState(false)

  const onSubmit = async() => {
    if(Email&&Password){

    var data = qs.stringify({
  'registration': 1,
  'Email': Email,
  'Password': Password,
  'Name': Name,
  'Mobile': Mobile,
  'surname': surname,
  'address': address
});
    var config = {
      method: 'post',
      url: 'https://mybagclub.net/api/api.php',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    console.log(config)
    
    axios(config)
    .then((response)=>{
      if (response.data.success == 1) {
        navigation.navigate("Login");
      } else {
        showMessage({
          message: "MYBAG CLUB",
          description: "Login Failed",
          type: "danger",
          textStyle: { fontFamily: "Poppins-Medium", color: "#fdfdfd" },
          titleStyle: { fontFamily: "Poppins-SemiBold", color: "#fdfdfd" },
        });
      }
    })
    .catch((error)=>{
      console.log(error.response.data.message);
    });
  }else{
  showMessage({
               message: "MYBAG CLUB",
               description: "Please enter all required fields ",
               type: "danger",
  textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
  titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
             });
            }
}
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.violet} />
      <ScrollView>
          <BackButton onPress={() => navigation.goBack()} />
        
        <View>
          <Text style={styles.heading}>Create your account</Text>
        </View>
        <View>
       
          <Input2
            label={"First Name"}
            compulsory
            placeholder="Enter First Name"
            value={Name}
            onChangeText={val => setName(val)}

          />
          <Input2
            label={"Last Name"}
            compulsory
            placeholder="Enter Last Name"
            value={surname}
            onChangeText={val => setSurname(val)}
          />
          <Input2 label={"Email"} compulsory placeholder="Enter Email" 
            value={Email}
            onChangeText={val => setEmail(val)}
          />
          <Input2 label={"Password"} compulsory placeholder="Enter Password"
            value={Password}
            onChangeText={val => setPassword(val)}
          />
          <Input2 label={"Phone"} compulsory placeholder="Enter phone number" 
            value={Mobile}
            onChangeText={val => setMobile(val)}
          />
          <Input2
            label="Address"
            multiline={true}
            numberOfLines={7}
            textAlignVertical={"top"}
            placeholder="Address"
            compulsory
            value={address}
            onChangeText={val => setAddress(val)}
          />
        </View>
        <View style={{ marginVertical:10 }}>
          <VioletButton
            buttonName="Continue"
            onPress={onSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 21,
    marginLeft: 15,
    marginTop: 20,
    paddingBottom: 10,
  },
  container:{
    paddingHorizontal:15,
    flex:1
  }
});
