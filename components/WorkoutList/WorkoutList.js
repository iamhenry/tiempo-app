import React, { useState, useContext } from "react";
import { FlatList } from "react-native";

import styled from "styled-components/native";
import Tokens from "../Global/Tokens";
import { H2 } from "../Global/Primitives";
import { WorkoutCell } from "../WorkoutCell/WorkoutCell";
import { WorkoutContext } from "../../Context/WorkoutContext";
import { WorkoutListEmptyState } from "./WorkoutListEmptyState";
import { deleteStoreItem } from "../../libs/store-helper";

const StyledWorkoutList = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${Tokens.spacing.large};
  z-index: 600;
  background-color: ${Tokens.color.blueMoon200};
  border-top-right-radius: ${Tokens.borderRadius.default};
  border-top-left-radius: ${Tokens.borderRadius.default};
`;

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
  const {
    workoutSettings,
    setWorkoutSettings,
    // removeAsyncStorage,
  } = useContext(WorkoutContext);

  const removeItem = (key) => {
    // copy the current State
    const cloneData = { ...workoutSettings };

    // remove the item
    delete cloneData[key];

    // update the Context with the newly modified cloned data
    setWorkoutSettings(cloneData);
    deleteStoreItem(key);

    // removeAsyncStorage();
  };

  const numberOfKeys = Object.keys(workoutSettings).length;

  return (
    <StyledWorkoutList>
      <SectionHeader>
        <SectionTitle>Workouts</SectionTitle>
      </SectionHeader>
      {numberOfKeys > 0 ? (
        <FlatList
          data={Object.values(workoutSettings)}
          renderItem={({ item }) => (
            <WorkoutCell onSwipeRight={removeItem} item={item} />
          )}
        />
      ) : (
        <WorkoutListEmptyState />
      )}
    </StyledWorkoutList>
  );
}
