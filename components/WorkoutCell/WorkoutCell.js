import React from "react";

import { H5, H6 } from "../Global/Primitives";
import styled from "styled-components/native";
import Tokens from "../Global/Tokens";

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
  color: ${Tokens.color.summerTime200};
  margin-bottom: ${Tokens.spacing.xSmall};
  font-family: ${Tokens.fontFamily.nunitoBlack};
`;

const WorkoutMetadata = styled(H6)`
  font-family: ${Tokens.fontFamily.nunitoRegular};
`;

const WorkoutDuration = styled(H5)`
  text-align: right;
  align-self: center;
  flex-basis: 20%;
  font-family: ${Tokens.fontFamily.nunitoBlack};
  color: ${Tokens.color.snowWhite100};
`;

export const WorkoutCell = ({ item }) => {
  return (
    <StyledWorkoutCell>
      <WorkoutInfo>
        <WorkoutTitle numberOfLines={1}>{item.name}</WorkoutTitle>
        <WorkoutMetadata numberOfLines={1}>{item.metadata}</WorkoutMetadata>
      </WorkoutInfo>
      <WorkoutDuration numberOfLines={1}>{item.duration}</WorkoutDuration>
    </StyledWorkoutCell>
  );
};
