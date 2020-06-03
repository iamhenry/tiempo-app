import React, { useState } from "react";
import styled from "styled-components/native";

import Quote from "../../components/Quote/Quote";
import Tokens from "../../components/Global/Tokens";
import { WorkoutList } from "../../components/WorkoutList/WorkoutList";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";
import { Feather } from "@expo/vector-icons";

// TODO - INVESTIGATE WHY SCROLLVIEW FLEXBOX ISN'T WORKING AND WORKS ONLY WITH VIEW COMPONENT
const HomeContainer = styled.ScrollView`
  background-color: ${Tokens.color.summerTime200};
  padding-top: ${Tokens.spacing.xxLarge};
  display: flex;
  flex: 1;
`;

export default function Home({ navigation }) {
  return (
    <HomeContainer stickyHeaderIndices={[0]}>
      <Quote />
      <WorkoutList />
      <StyledRoundButton
        tall
        wide
        onPress={() =>
          navigation.navigate("TimerDetails", {
            workOutKey: null,
            isUpdating: false,
          })
        }
      >
        <Feather name="plus" size={48} color={`${Tokens.color.blueMoon200}`} />
      </StyledRoundButton>
      {/* TODO - CREATE EMPTY STATE COMPONENT */}
    </HomeContainer>
  );
}
