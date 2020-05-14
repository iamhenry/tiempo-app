import React from "react";
import styled from "styled-components/native";

import { H1 } from "../../components/Global/Primitives";
import { StyledInput } from "../../components/Input/Input";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";
import { Feather, Entypo } from "@expo/vector-icons";
import Tokens from "../../components/Global/Tokens";
import TimePicker from "../../components/TimePicker/TimePicker";
import { StyledDropdownButton } from "../../components/DropdownButton/DropdownButton";

const TimerDetailsContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${Tokens.color.summerTime200};
  padding: 40px 20px 0;
`;

const DropdownContainer = styled.View`
  background-color: ${Tokens.color.blueMoon200};
  display: flex;
`;

export const TimerDetails = ({ navigation, route }) => {
  // TODO:
  // 1. CREATE A STATE IN WHICH THE TIMER Details WILL BE SAVED (3 TOTAL)
  // 2. CREATE A STATE FOR WORKOUT NAME
  // 3. CREATE FUNCTION FOR ONSTATE METHOD TO SAVE THE Details STATE

  const { name, metadata, duration } = route.params;
  return (
    <TimerDetailsContainer>
      <StyledRoundButton onPress={() => navigation.goBack()}>
        <Feather
          name="arrow-left"
          size={24}
          color={`${Tokens.color.blueMoon200}`}
        />
      </StyledRoundButton>
      <H1>{duration}</H1>
      <StyledInput />
      <StyledRoundButton
        primary
        tall
        wide
        onPress={() => navigation.navigate("TimerSession")}
      >
        <Entypo
          name="controller-play"
          size={64}
          color={`${Tokens.color.snowWhite100}`}
          borderRadius={5}
        />
      </StyledRoundButton>
      <DropdownContainer>
        <StyledDropdownButton title="Excercise" value="0:20" />
        <StyledDropdownButton title="Rest" value="0:05" />
        <StyledDropdownButton title="Repeat" value="X10" />
        <TimePicker />
      </DropdownContainer>
    </TimerDetailsContainer>
  );
};
