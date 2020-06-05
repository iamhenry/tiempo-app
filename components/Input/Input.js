import React, { useState } from "react";
import styled from "styled-components/native";
import Tokens from "../Global/Tokens";

const Input = styled.TextInput`
  border-radius: 100px;
  background-color: ${Tokens.color.summerTime100};
  padding: ${Tokens.spacing.small} ${Tokens.spacing.medium};
  color: ${Tokens.color.blueMoon200};
`;

export const StyledInput = ({ changeHandler, workoutName, placeHolder }) => {
  return (
    <Input
      placeholder={placeHolder}
      onChangeText={changeHandler}
      value={workoutName}
    />
  );
};
