import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import color from "../theme/color";

export default function VioletButton({ buttonName,onPress }) {
  return (
      <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.5}>
    <View >
        <Text style={{ color: "white", fontWeight: "bold" }}>{buttonName}</Text>
    </View>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: color.violet,
    width: "100%",
  },
});
