import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Quote from "./components/Quote/Quote";
import Tokens from "./components/Global/Tokens";
import { WorkoutList } from "./components/WorkoutList/WorkoutList";

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <View style={styles.quoteContainer}>
          <Quote />
        </View>
        <WorkoutList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#F7D794",
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
  quoteContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
