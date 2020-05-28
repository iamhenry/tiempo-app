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
import moment from "moment";
import "moment-duration-format";

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

  // CONTAINS VALUES AND SET VALUE FUNCTION FOR ALL PICKERS
  const [durationInSeconds, setDurationInSeconds] = useState("");
  const [restInSeconds, setRestInSeconds] = useState("");
  const [repeatInSeconds, setRepeatInSeconds] = useState("");

  // USING MOMENT JS TO FORMAT FROM SECONDS
  const calculatedDuration =
    (durationInSeconds + restInSeconds) * repeatInSeconds;
  const formattedDuration = moment
    .duration(calculatedDuration, "seconds")
    .format("h:mm:ss", {
      trim: false,
    });
  console.log(formattedDuration);

  // TODO - ADD LOCAL STORAGE

  const handleSave = () => {
    setWorkoutSettings((prevWorkoutSettings) => {
      return [
        {
          name: workoutName,
          duration: durationInSeconds,
          rest: restInSeconds,
          repeat: repeatInSeconds,
          // TODO - INSTALL UUID TO GENERATE RANDOM KEYS
        },
        ...prevWorkoutSettings,
      ];
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
        onPress={handleSave}
      />
      {/* TODO - CONVERT SECONDS TO H:MM:SS AND DISPLAY HERE */}
      <H1>{formattedDuration}</H1>
      <StyledInput changeHandler={setWorkoutName} workoutName={workoutName} />
      {/* <StyledRoundButton
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
      </StyledRoundButton> */}
      {/* <DropdownContainer>
        <StyledDropdownButton title="Excercise" value={exercise} />
        <StyledDropdownButton title="Rest" value={rest} />
        <StyledDropdownButton title="Repeat" value={`${repeat}x`} />
      </DropdownContainer> */}
      <ExcercisePicker setDurationInSeconds={setDurationInSeconds} />
      <RestPicker setRestInSeconds={setRestInSeconds} />
      <RepeatPicker setRepeatInSeconds={setRepeatInSeconds} />
    </TimerDetailsContainer>
  );
};
