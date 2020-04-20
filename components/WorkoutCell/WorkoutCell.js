import React from "react";
import { View, StyleSheet } from "react-native";
import { H5, H6 } from "../Global/Primitives";
import styled from "styled-components/native";

// TODO:
// 1. Style this component with tokens
// 2. Make this component flexible with css (nice to have)
// 3. text primitives need to have props/modifiers for color and weight


export const StyledWorkoutCell = styled.View`
  background-color: #1c1c1c;
  background-color: #475473;
  border-radius: 16px;
  padding: 20px;
`;

export const WorkoutCell = () => {
  return (
    <StyledWorkoutCell>
      <H5>Favorite HIIT Workout</H5>
      <H6>Length 3:25, Streak 15</H6>
      <H5>3:45</H5>
    </StyledWorkoutCell>
  );
};
