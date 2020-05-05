import React from "react";

import Quote from "../../components/Quote/Quote";
import Tokens from "../../components/Global/Tokens";
import { WorkoutList } from "../../components/WorkoutList/WorkoutList";
import styled from "styled-components/native";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";
import { Feather } from "@expo/vector-icons";

const HomeContainer = styled.ScrollView`
  background-color: ${Tokens.color.summerTime200};
  padding-top: ${Tokens.spacing.xxLarge};
  flex: 1;
`;

const WorkoutScrollview = styled.ScrollView`
  z-index: 600;
  background-color: ${Tokens.color.blueMoon200};
  border-top-right-radius: ${Tokens.borderRadius.default};
  border-top-left-radius: ${Tokens.borderRadius.default};
`;

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("TimerDetails");
  };

  return (
    <HomeContainer stickyHeaderIndices={[0]}>
      <Quote />
      <WorkoutList />
      {/* TODO: 
      1. Add button to create new workout
      2. Create pressHandler for button to navigate to TimerDetails
       */}
      <StyledRoundButton tall wide onPress={pressHandler}>
        <Feather name="plus" size={48} color={`${Tokens.color.blueMoon200}`} />
      </StyledRoundButton>
    </HomeContainer>
  );
}
