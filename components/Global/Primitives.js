import styled from 'styled-components/native';
import Tokens from './Tokens';

export const H1 = styled.Text`
  color: ${Tokens.color.blueMoon200};
  color: ${props => props.dark ? `${Tokens.color.blueMoon200}` : `${Tokens.color.summerTime200}`};
  font-size: ${Tokens.fontSize.h1};
  font-weight: 300;
`;

export const H2 = styled.Text`
  /* color: ${Tokens.color.blueMoon200}; */
  color: ${props => props.dark ? `${Tokens.color.blueMoon200}` : `${Tokens.color.summerTime200}`};
  font-size: ${Tokens.fontSize.h2};
  font-weight: 300;
`;

export const H3 = styled.Text`
  color: ${props => props.dark ? `${Tokens.color.blueMoon200}` : `${Tokens.color.summerTime200}`};
  font-size: ${Tokens.fontSize.h3};
  font-weight: 300;
`;

export const H4 = styled.Text`
  color: ${props => props.dark ? `${Tokens.color.blueMoon200}` : `${Tokens.color.summerTime200}`};
  font-size: ${Tokens.fontSize.h4};
  font-weight: 300;
`;

export const H5 = styled.Text`
  color: ${props => props.dark ? `${Tokens.color.blueMoon200}` : `${Tokens.color.summerTime200}`};
  font-size: ${Tokens.fontSize.h5};
  font-weight: ${Tokens.fontWeight.bold};
`;

export const H6 = styled.Text`
  color: ${props => props.dark ? `${Tokens.color.blueMoon200}` : `${Tokens.color.summerTime200}`};
  font-size: ${Tokens.fontSize.h6};
  font-weight: 300;
`;