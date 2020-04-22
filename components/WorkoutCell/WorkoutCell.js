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
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const WorkoutTitle = styled(H5)`
  /* flex-direction: column; */
  /* flex: 1; */
  /* justify-content: flex-start; */
  background-color: red;
  width: 90%;
`;

const WorkoutMetadata = styled(H6)`
  flex: 1;
  background-color: gold;
  width: 90%;
`;

const WorkoutDuration = styled(H5)`
  /* flex: 1; */
  /* flex-wrap: wrap; */
  /* justify-content: flex-end; */
  align-self: flex-end;
  background-color: silver;
  text-align: right;
`;

export const WorkoutCell = () => {
  return (
    <StyledWorkoutCell>
      <WorkoutTitle
        fontWeight={Tokens.fontWeight.bold}
        color={Tokens.color.summerTime200}
      >
        Favorite HIIT Workout
      </WorkoutTitle>
      <WorkoutMetadata>Length 3:25, Streak 15</WorkoutMetadata>
      <WorkoutDuration
        fontWeight={Tokens.fontWeight.bold}
        color={Tokens.color.snowWhite100}
      >
        58:45
      </WorkoutDuration>
    </StyledWorkoutCell>
  );
};
