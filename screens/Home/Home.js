import React from "react";
import styled from "styled-components/native";

import Quote from "../../components/Quote/Quote";
import Tokens from "../../components/Global/Tokens";
import { WorkoutList } from "../../components/WorkoutList/WorkoutList";
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
  return (
    <HomeContainer stickyHeaderIndices={[0]}>
      <Quote />
      <WorkoutList />
      <StyledRoundButton
        tall
        wide
        // 1. CREATE A DEFAULT VALUE FOR WORKOUT SETTINGS
        // 2. TRY AND PASS IN THE DATA FROM THE WORKOUT SETTINGS OBJECT IN USESTATE TO TEST
        onPress={() => navigation.navigate("TimerDetails")}
      >
        <Feather name="plus" size={48} color={`${Tokens.color.blueMoon200}`} />
      </StyledRoundButton>
    </HomeContainer>
  );
}
