import React from "react";

import { H1 } from "../../components/Global/Primitives";
import { StyledInput } from "../../components/Input/Input";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";
import { Feather, Entypo } from "@expo/vector-icons";
import Tokens from "../../components/Global/Tokens";
import styled from "styled-components/native";
import CustomPicker from "../../components/Picker/Picker";

const TimerSettingsContainer = styled.View`
  display: flex;
  background-color: ${Tokens.color.summerTime200};
  padding: 40px 20px 0;
`;

export const TimerSettings = () => {
  // TODO:
  // 1. CREATE A STATE IN WHICH THE TIMER SETTINGS WILL BE SAVED (3 TOTAL)
  // 2. CREATE A STATE FOR WORKOUT NAME
  // 3. CREATE FUNCTION FOR ONSTATE METHOD TO SAVE THE SETTINGS STATE

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
      <CustomPicker />
    </TimerSettingsContainer>
  );
};
