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
  background-color: ${Tokens.color.blueMoon100};
  border-radius: ${Tokens.spacing.small}px;
  padding: 20px;
  margin-bottom: ${Tokens.spacing.small}px;
  display: flex;
  flex-direction: row;
`;

const WorkoutInfo = styled.View`
  /* background-color: purple; */
  flex-basis: 80%;
`;

const WorkoutDuration = styled(H5)`
  text-align: right;
  /* background-color: green; */
  align-self: center;
  flex-basis: 20%;
`;

export const WorkoutCell = () => {
  return (
    <StyledWorkoutCell>
      <WorkoutInfo>
        <H5
          fontWeight={Tokens.fontWeight.bold}
          color={Tokens.color.summerTime200}
          numberOfLines={1}
        >
          Favorite HIIT Workout Workout Workout
        </H5>
        <H6 numberOfLines={1}>Length 3:25, Streak 15</H6>
      </WorkoutInfo>
      <WorkoutDuration
        fontWeight={Tokens.fontWeight.bold}
        color={Tokens.color.snowWhite100}
        numberOfLines={1}
      >
        58:45
      </WorkoutDuration>
    </StyledWorkoutCell>
  );
};
