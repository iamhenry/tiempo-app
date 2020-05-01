import React, { useState } from "react";
import { FlatList } from "react-native";

import styled from "styled-components/native";
import Tokens from "../Global/Tokens";
import { H2 } from "../Global/Primitives";
import { WorkoutCell } from "../WorkoutCell/WorkoutCell";
import { StyledButton } from "../Button/Button";

// TODO
// 1. UPDATE WORKOUT NAME FROM TIMER SCREEN

const StyledWorkoutList = styled.View`
  flex: 1;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${Tokens.spacing.large};
  z-index: 600;
  background-color: ${Tokens.color.blueMoon200};
  border-top-right-radius: ${Tokens.borderRadius.default};
  border-top-left-radius: ${Tokens.borderRadius.default};
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
  const [workout, setWorkout] = useState([
    {
      name: "Yoga Stretch",
      metadata: "Length 3:25, Streak 15",
      duration: "3:25",
    },
    {
      name: "HIIT Workout",
      metadata: "Length 3:25, Streak 15",
      duration: "7:00",
    },
  ]);

  return (
    <StyledWorkoutList>
      <SectionHeader>
        <SectionTitle>Workouts</SectionTitle>
        <StyledButton primaryTextColor text="Edit" size="small" />
      </SectionHeader>
      <FlatList
        data={workout}
        renderItem={({ item }) => <WorkoutCell item={item} />}
      />
    </StyledWorkoutList>
  );
}
