import React from "react";
import styled from "styled-components/native";
import Tokens from "../Global/Tokens";

// CSS AND THE CLASS COMPONENT GETS EXPORTED TOGETHER
// https://medium.com/plark/react-native-how-to-make-custom-button-30b34b020def

const BaseButton = styled.TouchableOpacity`
  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "36px";
      case "large":
        return "52px";
      default:
        return "36px";
    }
  }};
  background-color: ${(props) => (props.primary ? "red" : "black")};
  border-radius: 100px;
  color: ${Tokens.color.snowWhite100};
  padding: 8px;
  margin-bottom: 10px;
`;

const ButtonLabel = styled.Text`
  color: ${Tokens.color.summerTime200};
  font-size: ${Tokens.fontSize.h5};
  font-weight: ${Tokens.fontWeight.bold};
  text-align: center;
`;
// Ideal API solution for Button...
// I need: Text color(ie: primary),
// state(ie: default or disabled), size (ie small)
// <StyledButton primary small text=""/>

export const StyledButton = ({ text, ...rest }) => {
  return (
    <BaseButton {...rest}>
      <ButtonLabel>{text}</ButtonLabel>
    </BaseButton>
  );
};
