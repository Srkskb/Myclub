import { View, Text, TouchableOpacity,Button } from "react-native";
import React from "react";

export default function Signup({ navigation }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button
        title="navigate to the second screen"
        onPress={() => navigation.navigate("Login")}
      />
    
    </View>
  );
}
