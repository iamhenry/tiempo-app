import React from "react";
import { View, Text } from "react-native";
import { H5, H6 } from "../Global/Primitives";

export function WorkoutCell() {
  return (
    <View>
      <H5>Favorite HIIT Workout</H5>
      <H6>Work 0:16, Rest 0:05, Repeat 10X, Streak 7</H6>
      <H5>3:45</H5>
    </View>
  );
}
