import { View, Text, StatusBar,StyleSheet,Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import color from '../theme/color';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import UserInput from '../component/UserInput';
import VioletButton from '../component/VioletButton';
import BackButton from '../component/Backbutton';
import Input2 from '../component/inputs/Input2';
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from "axios";
import * as qs from 'qs'
export default function ResetPassword({navigation}) {
  const[Password,setPassword]=useState("")
  const[Email,setEmail]=useState("")
  const [loadingtypeoverlay, setLoadingtypeoverlay] = useState(false)
  const onSubmit = async() => {
    if(Password){
    //console.log('hit login api in else part');
    setLoadingtypeoverlay(true);

    var email_test = String(Email).trim().toLowerCase()

    if ( email_test === false  ) {
    setLoadingtypeoverlay(false);
    //console.log('email_test',email_test)
      setTimeout(()=> {
        Toast.show('Invalid email')
        },200)
        return
    }

  

    // if( Password !== confirmPass  ){
    //    Toast.show('confirm password does not match with password');
    //   return;
    //  }

    var data = qs.stringify({
      'Reset_password': '1',
  'email': Email,
  'password': Password
    });
    var config = {
      method: 'post',
      url: 'https://mybagclub.net/api/api.php',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data : data
    };
    
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
  } else{
  showMessage({
               message: "MYBAG CLUB",
               description: "Please enter new password",
               type: "danger",
  textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
  titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
             });
            }
}
  return (
    <View style={{paddingHorizontal:10,flex:1}}>
      <BackButton onPress={()=>navigation.goBack()}/>
      <StatusBar backgroundColor={color.violet} />
      <ScrollView style={{paddingHorizontal:15}}>
      <View style={{alignSelf:'center',paddingTop:40}}>
        <Image
          style={{ height: hp(30), width: hp(30)  }}
          source={require("../images/resetPassword.png")}
        />
      </View>
      <View>
        <Text style={styles.heading}>Create new password</Text>
      </View>
      <Text style={styles.description}>
        <Text>Enter your new password below</Text>
      </Text>
      <Input2 iconName={"email"} placeholder={"Email"}
       value={Email}
       onChangeText={val => setEmail(val)}
      />
     <Input2 label={"Password"} placeholder="Enter Password"
      value={Password}
      onChangeText={val => setPassword(val)}
     />
     <Input2 label={"Confirm Password"} placeholder="Confirm Password"
     
     />
      <View style={{paddingVertical:30,alignItems:'center'}}>
        <VioletButton buttonName="CREATE" onPress={onSubmit}/>
      </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
    color: "#4C5669",
  },

  description: {
    flexWrap: "wrap",
    fontSize: 17,
    textAlign: "center",
    padding: 10,
    marginBottom: 30,
    paddingBottom: 20,
  },
});