import React, { useState } from "react";
import { Text } from "react-native";
import NumberPlease from "react-native-number-please";
import Tokens from "../Global/Tokens";
import styled from "styled-components";
import { format } from "../../libs/time-helper";

const PickerContainer = styled.View`
  background-color: ${Tokens.color.snowWhite100};
  font-size: 20px;
`;

export default function RestPicker({ setRestInSeconds, restInSeconds }) {
  // converted and formated value to be default state for Picker values
  const stringPickerValue = format(restInSeconds);
  const stringSplitValues = stringPickerValue.split(":"); // split() returns array
  const splitMin = stringSplitValues[1];
  const splitSec = stringSplitValues[2];

  // INITIAL VALUES FOR EACH DROPDOWN
  const initialRest = [
    { id: "min", value: Number(splitMin) },
    { id: "sec", value: Number(splitSec) },
  ];

  // WORKOUT STATE
  const [restDetails, setRestDetails] = useState(initialRest);

  // WORKOUT CONFIG FOR PICKER
  const restConfig = [
    { id: "min", label: "min", min: 0, max: 59 },
    { id: "sec", label: "sec", min: 0, max: 59 },
  ];

  const onChange = (values) => {
    const minuteInSeconds = values[0].value * 60;
    const second = values[1].value;

    const restInSeconds = minuteInSeconds + second;

    setRestDetails(values);

    // SETSTATE FROM PARENT COMPONENT
    setRestInSeconds(restInSeconds);
  };

  return (
    <PickerContainer>
      <NumberPlease
        digits={restConfig}
        values={restDetails}
        onChange={onChange}
      />
    </PickerContainer>
  );
}
