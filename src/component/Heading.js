import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({HeadLine}) {
  return (
    <View style={styles.HeadLine}>
      <Text style={styles.text}>{HeadLine}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  HeadLine: {
    backgroundColor: "#4C5669",
    paddingHorizontal:15,
    paddingVertical:6,

    marginTop:10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize:15,
  },
});