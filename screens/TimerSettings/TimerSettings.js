import React from "react";

import { H1 } from "../../components/Global/Primitives";
import { StyledInput } from "../../components/Input/Input";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";
import { Feather, Entypo } from "@expo/vector-icons";
import Tokens from "../../components/Global/Tokens";
import styled from "styled-components/native";

const TimerSettingsContainer = styled.View`
  display: flex;
  background-color: ${Tokens.color.summerTime200};
  padding-top: 40px;
`;

export const TimerSettings = () => {
  return (
    <TimerSettingsContainer>
      <StyledRoundButton>
        <Feather
          name="arrow-left"
          size={24}
          color={`${Tokens.color.blueMoon200}`}
        />
      </StyledRoundButton>
      <H1>3:35</H1>
      <StyledInput />
      <StyledRoundButton primary tall wide>
        <Entypo
          name="controller-play"
          size={64}
          color={`${Tokens.color.snowWhite100}`}
          borderRadius={5}
        />
      </StyledRoundButton>
    </TimerSettingsContainer>
  );
};
