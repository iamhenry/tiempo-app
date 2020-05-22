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

export default function RestPicker() {
  // TODO - CREATE DEFAULT CONFIGS FOR USEPICKER HOOK
  // TODO - USE DEFAULT CONFIG FOR REST AND REPEAT
  // TODO - PASS SAVED SETTINGS TO UPDATE WORKOUT CONTEXT

  // INITIAL VALUES FOR EACH DROPDOWN
  const initialRest = [
    { id: "min", value: 0 },
    { id: "sec", value: 0 },
  ];

  // WORKOUT STATE
  const [restDetails, setRestDetails] = useState(initialRest);

  // WORKOUT CONFIG FOR PICKER
  const restConfig = [
    { id: "min", label: "min", min: 0, max: 59 },
    { id: "sec", label: "sec", min: 0, max: 59 },
  ];

  const onChange = (values) => {
    setRestDetails(values);
  };

  // moment({}) IS BEING SET AS AN EMPTY OBJECT FOR A RESET OF THE CURRENT TIME.
  // https://stackoverflow.com/questions/32813903/convert-thousands-of-seconds-to-hmmss-in-moment-js
  const minute = restDetails[0].value;
  const second = restDetails[1].value;
  const momentMinute = moment({}).minute(minute).format("mm");
  const momentSecond = moment({}).seconds(second).format("ss");

  return (
    <PickerContainer>
      <Text>
        {/* NOTE - REMOVE ONCE PICKER IS COMPLETED. ONLY USED TO DISPLAY VALUES */}
        Workout {momentMinute}:{momentSecond}
      </Text>
      <NumberPlease
        digits={restConfig}
        values={restDetails}
        onChange={onChange}
      />
    </PickerContainer>
  );
}
