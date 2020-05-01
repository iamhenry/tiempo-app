import React from "react";

import styled from "styled-components/native";
import Tokens from "../Global/Tokens";
import { Feather } from "@expo/vector-icons";
import { H5 } from "../Global/Primitives";

// TODO
// 1. UPDATE BUTTON STATE WITH SETTINGS FROM PICKER

const DropdownButton = styled.TouchableOpacity`
  background-color: ${Tokens.color.blueMoon100};
  padding: ${Tokens.spacing.medium} 20px;
  border-radius: ${Tokens.borderRadius.default};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TimeContainer = styled.View`
  flex-direction: row;
`;

const DropdownLabel = styled(H5)``;

const DropdownTimeLabel = styled(H5)``;

export const StyledDropdownButton = () => {
  return (
    <DropdownButton>
      <DropdownLabel
        color={`${Tokens.color.summerTime200}`}
        fontFamily={`${Tokens.fontFamily.nunitoBlack}`}
      >
        Exercise
      </DropdownLabel>
      <TimeContainer>
        <DropdownTimeLabel
          color={`${Tokens.color.snowWhite100}`}
          fontFamily={`${Tokens.fontFamily.nunitoBlack}`}
        >
          0:15
        </DropdownTimeLabel>
        <Feather
          name="chevron-down"
          size={24}
          color={`${Tokens.color.snowWhite100}`}
        />
      </TimeContainer>
    </DropdownButton>
  );
};
