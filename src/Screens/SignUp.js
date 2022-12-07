import { View, Text, StatusBar, StyleSheet } from "react-native";
import React, { useState } from "react";
import color from "../theme/color";
import InputBox from "../component/InputBox";
import BackButton from "../component/Backbutton";
import VioletButton from "../component/VioletButton";
import { ScrollView } from "react-native-gesture-handler";
import Input2 from "../component/inputs/Input2";
import axios from "axios";
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

    //console.log('hit login api in else part');
    // setLoadingtypeoverlay(true);

    // var email_test = String(Email).trim().toLowerCase()

    // if ( email_test === false  ) {
    // setLoadingtypeoverlay(false);
    // //console.log('email_test',email_test)
    //   setTimeout(()=> {
    //     Toast.show('Invalid email')
    //     },200)
    //     return
    // }
    // var password_test = (String(Password).trim()).length > 5
    // if ( password_test === false  ) {
    // setLoadingtypeoverlay(false);
    // //console.log('password_test',password_test)
    //   setTimeout(()=> {
    //     Toast.show('Invalid password')
    //     },200)
    //     return
    // }

    // var mobile_test = (String(Mobile).trim()).length ==  10
    // if ( mobile_test === false  ) {
    // setLoadingtypeoverlay(false);
    // //console.log('email_test',mobile_test)
    //   setTimeout(()=> {
    //     Toast.show('Invalid phone number')
    //     },200)
    //     return
    // }

    // if( Password !== confirmPass  ){
    //    Toast.show('confirm password does not match with password');
    //   return;
    //  }

    var data = qs.stringify({
  'registration': '1',
  'Email': 'chetanidigitalweb@gmail.com',
  'Password': '123456',
  'Name': 'Chetan',
  'Mobile': '8126103764',
  'surname': 'saini',
  'address': 'address' 
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
      console.log(JSON.stringify(response));
      // if (response.data.status == 200) {
      //  navigation.navigate("Login")
      // }
      // else{
      //   console.log(response);
      // }
    })
    .catch((error)=>{
      console.log(error.response.data.message);
    });
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
