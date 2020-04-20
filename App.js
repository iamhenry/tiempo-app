import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Quote from "./components/Quote/Quote";
import { H2 } from "./components/Global/Primitives";
import { WorkoutCell } from "./components/WorkoutCell/WorkoutCell";
import Tokens from "./components/Global/Tokens";

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <View style={styles.quoteContainer}>
          <Quote />
        </View>
        <View style={styles.workoutList}>
          <H2
            color={Tokens.color.snowWhite100}
            fontWeight={Tokens.fontWeight.bold}
          >
            Workouts
          </H2>
          <WorkoutCell />
          <WorkoutCell />
          <WorkoutCell />
        </View>
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
    // paddingLeft: 20,
    // paddingRight: 20,
    paddingTop: 64,
  },
  workoutList: {
    backgroundColor: "#303952",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 32,
  },
  quoteContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
