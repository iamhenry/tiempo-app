import React from "react";

import styled from "styled-components/native";
import Tokens from "../Global/Tokens";

const RoundButton = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.primary
      ? `${Tokens.color.blueMoon100}`
      : `${Tokens.color.summerTime100}`};
  height: ${(props) => (props.tall ? "88px" : "40px")};
  width: ${(props) => (props.wide ? "88px" : "40px")};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledRoundButton = ({ ...rest }) => {
  return <RoundButton {...rest} />;
};
