import React, { useContext, useState } from "react";
import styled from "styled-components/native";

import { H1 } from "../../components/Global/Primitives";
import { StyledInput } from "../../components/Input/Input";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";
import { Feather, Entypo } from "@expo/vector-icons";
import Tokens from "../../components/Global/Tokens";
import TimePicker from "../../components/TimePicker/TimePicker";
import { StyledDropdownButton } from "../../components/DropdownButton/DropdownButton";
import { StyledButton } from "../../components/Button/Button";
import { WorkoutContext } from "../../Context/WorkoutContext";

const TimerDetailsContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${Tokens.color.summerTime200};
  padding: 40px 20px 0;
`;

const DropdownContainer = styled.View`
  background-color: ${Tokens.color.blueMoon200};
  display: flex;
  justify-content: space-between;
  height: 30%;
`;

export const TimerDetails = ({ navigation, route }) => {
  // NAVIGATION PROPS
  const { name, duration, rest, exercise, repeat } = route.params;

  // GLOBAL WORKOUTSETTINGS STATE
  const { workoutSettings, setWorkoutSettings } = useContext(WorkoutContext);

  // TEXT INPUT STATE
  const [workoutName, setWorkoutName] = useState("");

  // GRABS TEXT VALUES FROM INPUT FIELD
  const changeHandler = (val) => {
    setWorkoutName(val);
  };

  // TODO - ADD LOCAL STORAGE

  // ADDS THE TEXT VALUE AND APPENDS THEM TO THE STATE
  const addWorkout = () => {
    setWorkoutSettings((prevWorkoutSettings) => {
      return [{ name: workoutName }, ...prevWorkoutSettings];
    });
  };

  return (
    <TimerDetailsContainer>
      <StyledRoundButton onPress={() => navigation.goBack()}>
        <Feather
          name="arrow-left"
          size={24}
          color={`${Tokens.color.blueMoon200}`}
        />
      </StyledRoundButton>
      <StyledButton
        primaryTextColor
        text="Save"
        size="small"
        onPress={addWorkout}
      />
      <H1>{duration}</H1>
      <StyledInput
        addWorkout={addWorkout}
        changeHandler={changeHandler}
        workoutName={workoutName}
      />
      <StyledRoundButton
        primary
        tall
        wide
        onPress={() =>
          navigation.navigate("TimerSession", {
            duration: duration,
            name: name,
          })
        }
        // TODO - CREATE FUNCTION TO START TIMER
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
      </DropdownContainer>
      <TimePicker />
    </TimerDetailsContainer>
  );
};
