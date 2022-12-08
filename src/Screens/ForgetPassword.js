import { View, Text,StatusBar,Image,StyleSheet, ScrollView } from 'react-native'
import React ,{useEffect,useState}from 'react'
import color from '../theme/color';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Email from '../component/Email';
import { FontAwesome } from "@expo/vector-icons";
import VioletButton from "../component/VioletButton";
import BackButton from '../component/Backbutton';
import Input from '../component/inputs/Input';
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from "axios";
import Toast from 'react-native-simple-toast';
import * as qs from 'qs'

export default function ForgetPassword({navigation}) {
  const[Email,setEmail]=useState("")
  const [loadingtypeoverlay, setLoadingtypeoverlay] = useState(false)
  const onSubmit = async() => {
    if(Email){
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
      'Forgot_password': '1',
      'email':Email,
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
      console.log(JSON.stringify(response.data));
      navigation.navigate("ForgetPassword2")
  
    })
    .catch((error)=>{
      console.log(error.response.data.message);
    });
  }
  showMessage({
               message: "MYBAG CLUB",
               description: "Please enter Email",
               type: "danger",
  textStyle:{fontFamily:'Poppins-Medium',color: '#fdfdfd'},
  titleStyle:{fontFamily:'Poppins-SemiBold',color: '#fdfdfd'}
             });
}

  return (
    <ScrollView style={{paddingHorizontal:15}}>
       <BackButton onPress={()=>navigation.goBack()}/>
      <StatusBar backgroundColor={color.violet} />
      <View style={{ alignSelf: "center", paddingTop: 30 }}>
        <Image
          style={{ height: hp(40), width: hp(40) }}
          source={require("../images/resetPasswordPic.png")}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={styles.heading}>Forget Password?</Text>
      </View>
      <View
        style={{
         
          marginTop: 10,
          width:'100%'
        }}
      >
        <Text style={{ fontSize: 19 ,marginBottom:20,textAlign:'center'}}>
          Enter the email address associated with your account
        </Text>
      </View>
      <Input iconName={"email"} placeholder={"Email"} 
       value={Email}
       onChangeText={val => setEmail(val)}
      />
      <View style={{ paddingVertical:40 }}>
        <VioletButton buttonName="SEND" onPress={onSubmit}/>
      </View>
    </ScrollView>
  );
}
const styles=StyleSheet.create({
heading:{
  fontWeight:'bold',
  fontSize:20,
}  
})
