import styled from "styled-components/native";
import Tokens from "./Tokens";

// TYPOGRAPHY
export const H1 = styled.Text((props) => ({
  color: props.color,
  fontSize: `${Tokens.fontSize.h1}`,
  fontWeight: props.fontWeight,
  // add font family as prop for all
}));

export const H2 = styled.Text((props) => ({
  color: props.color,
  fontSize: `${Tokens.fontSize.h2}`,
  fontWeight: props.fontWeight,
}));

export const H3 = styled.Text((props) => ({
  color: props.color,
  fontSize: `${Tokens.fontSize.h3}`,
  fontWeight: props.fontWeight,
}));

export const H4 = styled.Text((props) => ({
  color: props.color,
  fontSize: `${Tokens.fontSize.h4}`,
  fontWeight: props.fontWeight,
}));

export const H5 = styled.Text((props) => ({
  color: props.color,
  fontSize: `${Tokens.fontSize.h5}`,
  fontWeight: props.fontWeight,
}));

export const H6 = styled.Text`
  /* REWRITE THE ABOVE STYLED COMPONENTS WITH THIS SYNTAX BELOW */
  color: ${(props) => props.color || `${Tokens.color.snowWhite100}`};
  font-weight: ${(props) => props.fontWeight || `${Tokens.fontWeight.regular}`};
  font-size: ${Tokens.fontSize.h6};
`;
