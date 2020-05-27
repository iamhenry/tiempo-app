import React, { useState } from "react";
import { Text } from "react-native";
import NumberPlease from "react-native-number-please";
import moment from "moment";
import Tokens from "../Global/Tokens";
import styled from "styled-components";

const PickerContainer = styled.View`
  background-color: ${Tokens.color.snowWhite100};
  font-size: 20px;
`;

export default function ExcercisePicker({ addWorkout }) {
  // TODO - PASS SAVED SETTINGS TO UPDATE WORKOUT CONTEXT

  // INITIAL VALUES FOR EACH DROPDOWN
  const initialExcercise = [
    { id: "hr", value: 0 },
    { id: "min", value: 0 },
    { id: "sec", value: 0 },
  ];

  // WORKOUT STATE
  const [excerciseDetails, setExcerciseDetails] = useState(initialExcercise);

  // WORKOUT CONFIG FOR PICKER
  const excerciseConfig = [
    { id: "hr", label: "hr", min: 0, max: 12 },
    { id: "min", label: "min", min: 0, max: 59 },
    { id: "sec", label: "sec", min: 0, max: 59 },
  ];

  const onChange = (values) => {
    const hourInSeconds = values[0].value * 3600; // hour * 3600
    const minuteInSeconds = values[1].value * 60; // minute * 60
    const second = values[2].value; // no conversion

    const durationInSeconds = hourInSeconds + minuteInSeconds + second;

    setExcerciseDetails(values);
    addWorkout(durationInSeconds);
  };

  return (
    <PickerContainer>
      <NumberPlease
        digits={excerciseConfig}
        values={excerciseDetails}
        onChange={onChange}
      />
    </PickerContainer>
  );
}
