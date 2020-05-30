import React from "react";

import styled from "styled-components/native";
import { H4, H5 } from "../Global/Primitives";
import Tokens from "../Global/Tokens";
import quoteData from "../../data/quoteData.json";

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

// TODO - grab quotes from json file and display a random quote every pull-to-refresh
const randomQuote = quoteData[Math.floor(Math.random() * quoteData.length)];

export default function Quote() {
  return (
    <QuoteContainer>
      <QuoteText>{randomQuote.quote}</QuoteText>
      <QuotePerson>– {randomQuote.author}</QuotePerson>
    </QuoteContainer>
  );
}
