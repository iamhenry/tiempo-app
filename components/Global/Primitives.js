import styled from "styled-components/native";
import Tokens from "./Tokens";

// TYPOGRAPHY
// ADD FONT FAMILY PROP TO ALL

export const H1 = styled.Text`
  color: ${(props) => props.color || `${Tokens.color.blueMoon200}`};
  font-size: ${Tokens.fontSize.h1};
  font-weight: ${(props) => props.fontWeight || `${Tokens.fontWeight.regular}`};
`;

export const H2 = styled.Text`
  color: ${(props) => props.color || `${Tokens.color.blueMoon200}`};
  font-size: ${Tokens.fontSize.h2};
  font-weight: ${(props) => props.fontWeight || `${Tokens.fontWeight.regular}`};
`;

export const H3 = styled.Text`
  color: ${(props) => props.color || `${Tokens.color.blueMoon200}`};
  font-size: ${Tokens.fontSize.h3};
  font-weight: ${(props) => props.fontWeight || `${Tokens.fontWeight.regular}`};
`;

export const H4 = styled.Text`
  color: ${(props) => props.color || `${Tokens.color.blueMoon200}`};
  font-size: ${Tokens.fontSize.h4};
  font-weight: ${(props) => props.fontWeight || `${Tokens.fontWeight.regular}`};
`;

export const H5 = styled.Text`
  color: ${(props) => props.color || `${Tokens.color.blueMoon200}`};
  font-size: ${Tokens.fontSize.h5};
  font-weight: ${(props) => props.fontWeight || `${Tokens.fontWeight.regular}`};
  font-family: ${(props) =>
    props.fontFamily || `${Tokens.fontFamily.playfairRegular}`};
`;

export const H6 = styled.Text`
  color: ${(props) => props.color || `${Tokens.color.snowWhite100}`};
  font-weight: ${(props) => props.fontWeight || `${Tokens.fontWeight.regular}`};
  font-size: ${Tokens.fontSize.h6};
  font-family: ${(props) =>
    props.fontFamily || `${Tokens.fontFamily.playfairRegular}`};
`;
