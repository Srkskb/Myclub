import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const BackButton = ({onPress}) => {
  return (
    <View style={{ marginTop: 30}}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="chevron-back" size={24} color="781C45" />
      </TouchableOpacity>
    </View>
  );
};
export default BackButton;
