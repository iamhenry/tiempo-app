import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Quote from "./components/Quote/Quote";

export default function App() {
  return (
    <View style={styles.container}>
      <Quote style={styles.quote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7D794",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 64,
  },
  quote: {
    marginTop: 40,
    backgroundColor: "white",
  },
});
