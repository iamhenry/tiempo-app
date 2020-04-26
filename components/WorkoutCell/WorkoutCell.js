import React from "react";
import { H5, H6 } from "../Global/Primitives";
import styled from "styled-components/native";
import Tokens from "../Global/Tokens";

// TODO:
// 1. Style this component with tokens
// 2. Make this component flexible with css by reusing tokens(nice to have)
// 3. text primitives need to have props/modifiers for color and weight
// 4. add milestones to Github for v1 release

export const StyledWorkoutCell = styled.View`
  background-color: ${Tokens.color.blueMoon100};
  border-radius: ${Tokens.spacing.small};
  padding: 20px;
  margin-bottom: ${Tokens.spacing.small};
  display: flex;
  flex-direction: row;
`;

const WorkoutInfo = styled.View`
  flex-basis: 80%;
`;

const WorkoutTitle = styled(H5)`
  font-weight: ${Tokens.fontWeight.bold};
  color: ${Tokens.color.summerTime200};
  margin-bottom: ${Tokens.spacing.xSmall};
`;

const WorkoutMetadata = styled(H6)``;

const WorkoutDuration = styled(H5)`
  text-align: right;
  align-self: center;
  flex-basis: 20%;
  font-weight: ${Tokens.fontWeight.bold};
  color: ${Tokens.color.snowWhite100};
`;

export const WorkoutCell = () => {
  return (
    <StyledWorkoutCell>
      <WorkoutInfo>
        <WorkoutTitle numberOfLines={1}>
          Favorite HIIT Workout Workout Workout
        </WorkoutTitle>
        <WorkoutMetadata numberOfLines={1}>
          Length 3:25, Streak 15
        </WorkoutMetadata>
      </WorkoutInfo>
      <WorkoutDuration numberOfLines={1}>58:45</WorkoutDuration>
    </StyledWorkoutCell>
  );
};
