import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import color from "../theme/color";
import BackButton from "../component/Backbutton";
import Email from "../component/Email";
import VioletButton from "../component/VioletButton";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import Input from "../component/inputs/Input";
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from "axios";
import Toast from "react-native-simple-toast";
import * as qs from "qs";
export default function Login({ navigation }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loadingtypeoverlay, setLoadingtypeoverlay] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const onSubmit = async () => {
    if (Email && Password) {
      var data = qs.stringify({
        login: "1",
        email: Email,
        password: Password,
      });
      var config = {
        method: "post",
        url: "https://mybagclub.net/api/api.php",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          if (response.data.success == 1) {
            navigation.navigate("Home");
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
        .catch((error) => {
          console.log(error.response.data.message);
        });
    } else {
      showMessage({
        message: "MYBAG CLUB",
        description: "Please enter Email or Password",
        type: "danger",
        textStyle: { fontFamily: "Poppins-Medium", color: "#fdfdfd" },
        titleStyle: { fontFamily: "Poppins-SemiBold", color: "#fdfdfd" },
      });
    }
  };

  return (
    // <ScrollView style={{ flex: 1 }}>
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <StatusBar backgroundColor={color.violet} />

      <BackButton />
      <View>
        <Text style={styles.text}>Log in to your account</Text>
      </View>
      <Input
        iconName={"email"}
        placeholder={"Email"}
        value={Email}
        onChangeText={(val) => setEmail(val)}
      />
      <Input
        iconName={"lock"}
        placeholder={"Password"}
        value={Password}
        onChangeText={(val) => setPassword(val)}
      />
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <View style={{}}></View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgetPassword")}
          style={{ paddingTop: 10, paddingBottom: 20 }}
        >
          <Text style={{ color: "grey" }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <VioletButton buttonName="LOGIN" onPress={onSubmit} />
      </View>
      <View style={styles.SignUpOption}>
        <View>
          <Text>Don't have an account</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.text2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isKeyboardVisible == false && (
        <View style={styles.ImageView}>
          <ImageBackground
            style={{
              height: hp(40),
              width: hp(40),
              position: "relative",
              bottom: 0,
            }}
            source={require("../images/logopagesnap.png")}
          />
        </View>
      )}
    </View>
    // </ScrollView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4C5669",
    marginVertical: 20,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "grey",
    alignItems: "center",
  },
  TextBox: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 20,
    height: 40,
    borderRadius: 8,
    marginHorizontal: 25,
  },
  Text: {
    paddingLeft: 10,
  },
  text2: {
    color: color.violet,
    fontWeight: "bold",
  },
  SignUpOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  ImageView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
});
