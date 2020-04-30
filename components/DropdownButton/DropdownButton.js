import React from "react";

import styled from "styled-components/native";
import Tokens from "../Global/Tokens";
import { Feather } from "@expo/vector-icons";

const DropdownButton = styled.TouchableOpacity``;

const DropdownLabel = styled.Text``;

const DropdownTimeLabel = styled.Text``;

const TimeContainer = styled.View``;

export const StyledDropdownButton = () => {
  return (
    <DropdownButton>
      <DropdownLabel></DropdownLabel>
      <TimeContainer>
        <TimeContainer>Exercise</TimeContainer>
        <Feather
          name="chevron-down"
          size={8}
          color={`${Tokens.color.snowWhite100}`}
        />
      </TimeContainer>
    </DropdownButton>
  );
};
