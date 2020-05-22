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

export default function RepeatPicker() {
  // TODO - CREATE DEFAULT CONFIGS FOR USEPICKER HOOK
  // TODO - USE DEFAULT CONFIG FOR REST AND REPEAT
  // TODO - PASS SAVED SETTINGS TO UPDATE WORKOUT CONTEXT

  // INITIAL VALUES FOR EACH DROPDOWN
  const initialRepeat = [{ id: "x", value: 0 }];

  // WORKOUT STATE
  const [repeatDetails, setRepeatDetails] = useState(initialRepeat);

  // WORKOUT CONFIG FOR PICKER
  const repeatConfig = [{ id: "x", label: "x", min: 0, max: 50 }];

  const onChange = (values) => {
    setRepeatDetails(values);
  };

  const repeat = repeatDetails[0].value;

  return (
    <PickerContainer>
      <Text>
        {/* NOTE - REMOVE ONCE PICKER IS COMPLETED. ONLY USED TO DISPLAY VALUES */}
        Workout {repeat}
      </Text>
      <NumberPlease
        digits={repeatConfig}
        values={repeatDetails}
        onChange={onChange}
      />
    </PickerContainer>
  );
}
