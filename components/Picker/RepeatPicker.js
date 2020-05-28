import React, { useState } from "react";
import NumberPlease from "react-native-number-please";
import Tokens from "../Global/Tokens";
import styled from "styled-components";

const PickerContainer = styled.View`
  background-color: ${Tokens.color.snowWhite100};
  font-size: 20px;
`;

export default function RepeatPicker({ setRepeatMultiplier }) {
  // INITIAL VALUES FOR EACH DROPDOWN
  const initialRepeat = [{ id: "x", value: 0 }];

  // WORKOUT STATE
  const [repeatDetails, setRepeatDetails] = useState(initialRepeat);

  // WORKOUT CONFIG FOR PICKER
  const repeatConfig = [{ id: "x", label: "x", min: 1, max: 50 }];

  const onChange = (values) => {
    const repeat = values[0].value;
    setRepeatDetails(values);

    // SETSTATE FROM PARENT COMPONENT
    setRepeatMultiplier(repeat);
    // console.log(repeat);
  };

  return (
    <PickerContainer>
      <NumberPlease
        digits={repeatConfig}
        values={repeatDetails}
        onChange={onChange}
      />
    </PickerContainer>
  );
}
