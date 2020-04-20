import styled from "styled-components/native";
import Tokens from "./Tokens";

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

export const H6 = styled.Text((props) => ({
  color: props.color,
  fontSize: `${Tokens.fontSize.h6}`,
  fontWeight: props.fontWeight,
}));

// export const H6 = styled.Text`
//   color: ${(props) =>
//     props.dark
//       ? `${Tokens.color.blueMoon200}`
//       : `${Tokens.color.summerTime200}`};
//   font-size: ${Tokens.fontSize.h6};
//   font-weight: 300;
// `;

// ${(props) => {
//     switch (props.fontWeight) {
//       case "regular":
//         return `font-weight: ${Tokens.fontWeight.regular}`;
//       case "semiBold":
//         return `font-weight: ${Tokens.fontWeight.semiBold}`;
//     }
//     return `font-weight: ${Tokens.fontWeight.bold}`;
//   }}

// export const H5 = styled.Text`
//   color: ${props => props.dark ? `${Tokens.color.blueMoon200}` : `${Tokens.color.summerTime200}`};
//   font-size: ${Tokens.fontSize.h5};
//   font-weight: ${Tokens.fontWeight.bold};
// `;
