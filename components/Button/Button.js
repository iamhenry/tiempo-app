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

  background-color: ${(props) =>
    props.primary
      ? `${Tokens.color.summerTime200}`
      : `${Tokens.color.blueMoon100}`};
  border-radius: 100px;
  padding: ${Tokens.spacing.xSmall} ${Tokens.spacing.medium};
  display: flex;
  justify-content: center;
`;

// HOW CAN I TARGET THIS CHILD COMPONENT WITH CSS?
const ButtonLabel = styled.Text`
  color: ${(props) =>
    props.primaryTextColor
      ? `${Tokens.color.summerTime200}`
      : `${Tokens.color.snowWhite100}`};
  font-size: ${Tokens.fontSize.h5};
  font-weight: ${Tokens.fontWeight.bold};
  text-align: center;
`;

export const StyledButton = ({ text, ...rest }) => {
  return (
    <BaseButton {...rest}>
      <ButtonLabel {...rest}>{text}</ButtonLabel>
    </BaseButton>
  );
};
