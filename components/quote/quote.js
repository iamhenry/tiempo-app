import React from "react";
import styled from "styled-components/native";
import { H4, H5 } from "../Global/Primitives";
import Tokens from "../Global/Tokens";

const QuoteContainer = styled.View`
  padding: 0 20px;
`;

const QuoteText = styled(H4)`
  padding-bottom: ${Tokens.spacing.medium};
  color: ${Tokens.color.blueMoon200};
  font-weight: ${Tokens.fontWeight.regular};
`;

const QuotePerson = styled(H5)`
  margin-bottom: ${Tokens.spacing.large};
  color: ${Tokens.color.blueMoon200};
  font-weight: ${Tokens.fontWeight.bold};
`;

export default function Quote() {
  return (
    <QuoteContainer>
      <QuoteText>
        I hate every minute of training. But I said, don’t quit. Suffer now and
        live the rest of your life a champion.
      </QuoteText>
      <QuotePerson>– Muhammad Ali</QuotePerson>
    </QuoteContainer>
  );
}
