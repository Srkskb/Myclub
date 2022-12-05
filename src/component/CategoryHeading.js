import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function CategoryHeading({ CategoryName, number }) {
  return (
    <Text style={styles.text}>
      <Text style={styles.CategoryName}>{CategoryName}</Text>
      <Text>{number}</Text>
    </Text>
  );
}
const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    backgroundColor: "#781C45",
    color: "white",
    paddingVertical:10,
  },
  CategoryName: {
    fontWeight:'bold',
  },
});