import React from "react";
import styled from "styled-components/native";
import Tokens from "../Global/Tokens";
import { H2 } from "../Global/Primitives";
import { WorkoutCell } from "../WorkoutCell/WorkoutCell";
import { StyledButton } from "../Button/Button";

const StyledWorkoutList = styled.ScrollView`
  background-color: ${Tokens.color.blueMoon200};
  border-top-right-radius: ${Tokens.borderRadius.default};
  border-top-left-radius: ${Tokens.borderRadius.default};
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${Tokens.spacing.large};
`;

// THIS IS HOW YOU STYLE NESTED STYLED COMPONENTS IN REACT NATIVE
// BY EXTENDING IT
const SectionTitle = styled(H2)`
  margin-bottom: ${Tokens.spacing.medium};
  color: ${Tokens.color.summerTime200};
  font-weight: ${Tokens.fontWeight.bold};
`;

const SectionHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export function WorkoutList() {
  return (
    <StyledWorkoutList>
      <SectionHeader>
        <SectionTitle>Workouts</SectionTitle>
        {/* Need to make color prop for button*/}
        <StyledButton text="Needs Work !!!" size="small" />
      </SectionHeader>
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
