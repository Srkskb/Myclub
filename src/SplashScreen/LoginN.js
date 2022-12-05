import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <View>
      <Button
        title="navigate to the next screen"
        onPress={() => navigation.navigate("Signup")}
      />
      <Text>Signup</Text>
    </View>
  );
}
