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
    { id: "hr", label: "hr", min: 0, max: 23 },
    { id: "min", label: "min", min: 0, max: 59 },
    { id: "sec", label: "sec", min: 0, max: 59 },
  ];

  const onChange = (values) => {
    // moment({}) IS BEING SET AS AN EMPTY OBJECT FOR A RESET OF THE CURRENT TIME.
    // https://stackoverflow.com/questions/32813903/convert-thousands-of-seconds-to-hmmss-in-moment-js
    const hour = values[0].value;
    const minute = values[1].value;
    const second = values[2].value;
    const momentHour = moment({}).hour(hour).format("HH");
    const momentMinute = moment({}).minute(minute).format("mm");
    const momentSecond = moment({}).seconds(second).format("ss");
    const momentDuration = `${momentHour}:${momentMinute}:${momentSecond}`;

    setExcerciseDetails(values);
    addWorkout(momentDuration);
  };

  return (
    <PickerContainer>
      <Text>
        {/* NOTE - REMOVE ONCE PICKER IS COMPLETED. ONLY USED TO DISPLAY VALUES */}
        {/* Workout {momentDuration} */}
      </Text>
      <NumberPlease
        digits={excerciseConfig}
        values={excerciseDetails}
        onChange={onChange}
      />
    </PickerContainer>
  );
}
