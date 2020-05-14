import React, { useState } from "react";
import styled from "styled-components/native";
import Tokens from "../Global/Tokens";

const Input = styled.TextInput`
  border-radius: 100px;
  background-color: ${Tokens.color.summerTime100};
  padding: ${Tokens.spacing.small} ${Tokens.spacing.medium};
  color: ${Tokens.color.blueMoon200};
`;

export const StyledInput = () => {
  const [textValue, onChangeText] = useState("New Workout #1");

  return (
    <Input value={textValue} onChangeText={(text) => onChangeText(text)} />
  );
};
