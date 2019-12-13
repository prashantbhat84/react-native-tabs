import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Navigator from "./Navigation/navigator";
import Screen1 from "./screens/Screen1";
import { Header } from "react-native-elements";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        centerComponent={{
          text: "GARIYASI SYSTEMS",
          style: {
            color: "#17f"
          }
        }}
        containerStyle={{
          backgroundColor: "#fff"
        }}
      />

      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
    paddingHorizontal: 18,
    paddingTop: 30
  }
});
