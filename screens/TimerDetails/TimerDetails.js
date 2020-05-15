import React from "react";
import styled from "styled-components/native";

import { H1 } from "../../components/Global/Primitives";
import { StyledInput } from "../../components/Input/Input";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";
import { Feather, Entypo } from "@expo/vector-icons";
import Tokens from "../../components/Global/Tokens";
import TimePicker from "../../components/TimePicker/TimePicker";
import { StyledDropdownButton } from "../../components/DropdownButton/DropdownButton";
import { StyledButton } from "../../components/Button/Button";
import { Text } from "react-native";

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

  const { name, metadata, duration, rest, exercise, repeat } = route.params;

  return (
    <TimerDetailsContainer>
      <StyledRoundButton onPress={() => navigation.goBack()}>
        <Feather
          name="arrow-left"
          size={24}
          color={`${Tokens.color.blueMoon200}`}
        />
      </StyledRoundButton>
      {/* <StyledButton primaryTextColor text="Save" size="small" /> */}
      <H1>{duration}</H1>
      {/* TODO: CREATE FUNCTION TO SUBMIT WORKOUT SETTINGS */}
      <StyledInput />
      <StyledRoundButton
        primary
        tall
        wide
        // TODO - CREATE FUNCTION TO START TIMER
        // 1. CREATE FUNCTION WHICH PASSES WORKOUT DATA TO TIMERSESSION
        onPress={() =>
          navigation.navigate("TimerSession", { duration: duration })
        }
      >
        <Entypo
          name="controller-play"
          size={64}
          color={`${Tokens.color.snowWhite100}`}
          borderRadius={5}
        />
      </StyledRoundButton>
      <DropdownContainer>
        <StyledDropdownButton title="Excercise" value={exercise} />
        <StyledDropdownButton title="Rest" value={rest} />
        <StyledDropdownButton title="Repeat" value={`${repeat}x`} />
        <TimePicker />
      </DropdownContainer>
    </TimerDetailsContainer>
  );
};
