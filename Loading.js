import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { startGeofencingAsync } from "expo-location";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Loading the current weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#52796f",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
