import React from "react";
import { View, StyleSheet } from "react-native";
import { H4, H5, H6 } from "../Global/Primitives";
import styled from "styled-components/native";
import Tokens from "../Global/Tokens";

// TODO:
// 1. Style this component with tokens
// 2. Make this component flexible with css by reusing tokens(nice to have)
// 3. text primitives need to have props/modifiers for color and weight
// 4. add milestones to Github for v1 release

export const StyledWorkoutCell = styled.View`
  background-color: #1c1c1c;
  background-color: #475473;
  border-radius: ${Tokens.spacing.small}px;
  padding: 20px;
  margin-bottom: ${Tokens.spacing.small}px;
`;

export const WorkoutCell = () => {
  return (
    <StyledWorkoutCell>
      <H5
        fontWeight={Tokens.fontWeight.bold}
        color={Tokens.color.summerTime200}
      >
        Favorite HIIT Workout
      </H5>
      <H6>Length 3:25, Streak 15</H6>
      <H5 fontWeight={Tokens.fontWeight.bold} color={Tokens.color.snowWhite100}>
        3:45
      </H5>
    </StyledWorkoutCell>
  );
};
