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
  // TODO - CREATE FUNCTION TO UPDATE STATE AND SUBMITS NEW SETTINGS
  // 1. BRING IN WORKOUT CONTEXT
  // 2. UPDATE THE CONTEXT STATE WITH A FUNCTION
  return <Input placeholder="New Workout" />;
};
