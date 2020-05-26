import React, { useContext, useState } from "react";
import styled from "styled-components/native";

import { H1 } from "../../components/Global/Primitives";
import { StyledInput } from "../../components/Input/Input";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";
import { Feather, Entypo } from "@expo/vector-icons";
import Tokens from "../../components/Global/Tokens";
import { StyledDropdownButton } from "../../components/DropdownButton/DropdownButton";
import { StyledButton } from "../../components/Button/Button";
import { WorkoutContext } from "../../Context/WorkoutContext";
import ExcercisePicker from "../../components/Picker/ExcercisePicker";
import RestPicker from "../../components/Picker/RestPicker";
import RepeatPicker from "../../components/Picker/RepeatPicker";

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

  // CONTAINS VALUES AND SET VALUE FUNCTION FOR EXCERCISE PICKER
  const [momentDuration, setMomentDuration] = useState("");
  const [momentRest, setMomentRest] = useState("");
  const [momentRepeat, setMomentRepeat] = useState("");

  // TODO - ADD LOCAL STORAGE

  const handleSave = () => {
    setWorkoutSettings((prevWorkoutSettings) => {
      return [
        {
          name: workoutName,
          duration: momentDuration,
          rest: momentRest,
          repeat: momentRepeat,
        },
        ...prevWorkoutSettings,
      ];
    });
    // console.log(momentRest);
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
        onPress={handleSave}
      />
      {/* TODO: DURATION NEEDS TO BE A CALCULATION OF EXCERCISE, REST, AND REPEAT SETTINGS */}
      <H1>{duration}</H1>
      <StyledInput changeHandler={setWorkoutName} workoutName={workoutName} />
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
        // TODO - CREATE BUTTON MORPHING SVG ANIMATION
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
      {/* <ExcercisePicker addWorkout={setMomentDuration} /> */}
      {/* <RestPicker addWorkout={setMomentRest} /> */}
      <RepeatPicker addWorkout={setMomentRepeat} />
    </TimerDetailsContainer>
  );
};
