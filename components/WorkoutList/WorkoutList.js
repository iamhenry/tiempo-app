import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import Tokens from "../Global/Tokens";
import { H2 } from "../Global/Primitives";
import { WorkoutCell } from "../WorkoutCell/WorkoutCell";

const StyledWorkoutList = styled.View`
  background-color: #303952;
  border-radius: 16px;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 32px;

  /* FIGURE OUT HOW TO TARGET H2 STYLED COMPONENT */
  ${H2} {
    margin-bottom: 24px;
  }
`;

import React from "react";

export function WorkoutList() {
  return (
    <StyledWorkoutList>
      <H2
        style={styles.heading}
        color={Tokens.color.snowWhite100}
        fontWeight={Tokens.fontWeight.bold}
      >
        Workouts
      </H2>
      <WorkoutCell />
      <WorkoutCell />
      <WorkoutCell />
    </StyledWorkoutList>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginBottom: 24,
  },
});
