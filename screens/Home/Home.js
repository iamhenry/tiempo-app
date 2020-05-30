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
  const defaultWorkoutSettings = useState({
    name: "Simple Stretch",
    metadata: "Length 0:00, Streak 5",
    duration: "0:00",
    key: 0,
    exercise: "0:00",
    rest: "0:00",
    repeat: "0",
  });

  return (
    <HomeContainer stickyHeaderIndices={[0]}>
      <Quote />
      <WorkoutList />
      <StyledRoundButton
        tall
        wide
        onPress={() =>
          navigation.navigate("TimerDetails", {
            name: defaultWorkoutSettings[0].name,
            metadata: defaultWorkoutSettings[0].metadata,
            duration: defaultWorkoutSettings[0].duration,
            rest: defaultWorkoutSettings[0].rest,
            exercise: defaultWorkoutSettings[0].exercise,
            repeat: defaultWorkoutSettings[0].repeat,
          })
        }
      >
        <Feather name="plus" size={48} color={`${Tokens.color.blueMoon200}`} />
      </StyledRoundButton>
      {/* TODO - CREATE EMPTY STATE COMPONENT */}
    </HomeContainer>
  );
}
