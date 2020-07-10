import React from "react";
import styled from "styled-components/native";
import { H5 } from "../Global/Primitives";
import Tokens from "../Global/Tokens";

const Container = styled.View``;

const Title = styled(H5)`
  color: ${Tokens.color.snowWhite100};
  margin-bottom: ${Tokens.spacing.xSmall};
  font-family: ${Tokens.fontFamily.nunitoBlack};
  text-align: center;
`;
const Message = styled(H5)`
  color: ${Tokens.color.snowWhite100};
  font-family: ${Tokens.fontFamily.nunitoRegular};
  text-align: center;
`;

export const WorkoutListEmptyState = () => {
  return (
    <Container>
      <Title>No Workouts</Title>
      <Message>There are no timers setup at the moment.</Message>
      <Message>Tap the button below to create one.</Message>
    </Container>
  );
};
