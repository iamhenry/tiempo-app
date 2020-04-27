import React from "react";
import { Text } from "react-native";

import styled from "styled-components/native";
import Tokens from "../Global/Tokens";

const RoundButton = styled.TouchableOpacity`
  background-color: ${Tokens.color.blueMoon200};
  height: 88px;
  width: 88px;
  border-radius: 100px;
`;

export const StyledRoundButton = () => {
  return (
    <RoundButton>
      <Text>Play</Text>
    </RoundButton>
  );
};
