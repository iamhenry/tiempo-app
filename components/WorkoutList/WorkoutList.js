import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import Tokens from "../Global/Tokens";
import { H2 } from "../Global/Primitives";
import { WorkoutCell } from "../WorkoutCell/WorkoutCell";

const StyledWorkoutList = styled.View`
  background-color: ${Tokens.color.blueMoon200};
  border-radius: ${Tokens.borderRadius[0]}px;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${Tokens.spacing.large}px;
`;

// THIS IS HOW YOU STYLE NESTED STYLED COMPONENTS IN REACT NATIVE
// BY EXTENDING IT
const SectionTitle = styled(H2)`
  margin-bottom: ${Tokens.spacing.medium}px;
`;

export function WorkoutList() {
  return (
    <StyledWorkoutList>
      <SectionTitle
        color={Tokens.color.snowWhite100}
        fontWeight={Tokens.fontWeight.bold}
      >
        Workouts
      </SectionTitle>
      <WorkoutCell />
      <WorkoutCell />
      <WorkoutCell />
      <WorkoutCell />
      <WorkoutCell />
      <WorkoutCell />
      <WorkoutCell />
    </StyledWorkoutList>
  );
}
