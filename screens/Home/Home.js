import React from "react";
import Quote from "../../components/Quote/Quote";
import Tokens from "../../components/Global/Tokens";
import { WorkoutList } from "../../components/WorkoutList/WorkoutList";
import styled from "styled-components/native";

const HomeContainer = styled.View`
  background-color: ${Tokens.color.summerTime200};
  padding-top: ${Tokens.spacing.xxLarge};
  flex: 1;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Quote />
      <WorkoutList />
    </HomeContainer>
  );
}
