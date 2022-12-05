import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./src/Screens/SignUp";
import Login from "./src/Screens/Login";
import Home from "./src/Screens/Home";
import ForgetPassword from "./src/Screens/ForgetPassword";
import ForgetPassword2 from "./src/Screens/ForgetPassword2";
import ResetPassword from "./src/Screens/ResetPassword";

import DetailedScreen from "./src/Screens/DetailedScreen";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ForgetPassword2" component={ForgetPassword2} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
);
}
