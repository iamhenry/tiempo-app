import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;

const EmptyMessage = styled.Text``;

export const WorkoutListEmptyState = () => {
  return (
    <Container>
      <EmptyMessage>No workouts</EmptyMessage>
    </Container>
  );
};
