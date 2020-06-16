import React, { useState } from "react";
import { Text, View } from "react-native";
import NumberPlease from "react-native-number-please";
import Tokens from "../Global/Tokens";
import styled from "styled-components";
import { format } from "../../libs/time-helper";

const PickerContainer = styled.View`
  background-color: ${Tokens.color.snowWhite100};
  font-size: 20px;
`;

export default function ExcercisePicker({
  setExcerciseInSeconds,
  excerciseInSeconds,
}) {
  // converted and format value to be default state for Picker values
  let stringPickerValue = format(excerciseInSeconds);
  const stringSplitValues = stringPickerValue.split(":"); // split() returns array
  const splitHour = stringSplitValues[0];
  const splitMin = stringSplitValues[1];
  const splitSec = stringSplitValues[2];

  const initialExcercise = [
    { id: "hr", value: Number(splitHour) },
    { id: "min", value: Number(splitMin) },
    { id: "sec", value: Number(splitSec) },
  ];

  // VALUE STATE FOR PICKER
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

    // SETSTATE FROM PARENT COMPONENT
    setExcerciseInSeconds(durationInSeconds);
  };

  return (
    <>
      <PickerContainer>
        <NumberPlease
          digits={excerciseConfig}
          values={excerciseDetails}
          onChange={onChange}
        />
      </PickerContainer>
    </>
  );
}
