import React from "react";

import { H5, H6 } from "../Global/Primitives";
import styled from "styled-components/native";
import Tokens from "../Global/Tokens";
import { useNavigation } from "@react-navigation/native";
import { format, calculateDuration } from "../../libs/time-helper";
import "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { View, Text } from "react-native";

export const StyledWorkoutCell = styled.TouchableOpacity`
  background-color: ${Tokens.color.blueMoon100};
  border-radius: ${Tokens.spacing.small};
  padding: 20px;
  margin-bottom: ${Tokens.spacing.small};
  display: flex;
  flex-direction: row;
`;

const WorkoutInfo = styled.View`
  flex-basis: 80%;
`;

const WorkoutTitle = styled(H5)`
  color: ${Tokens.color.summerTime200};
  margin-bottom: ${Tokens.spacing.xSmall};
  font-family: ${Tokens.fontFamily.nunitoBlack};
`;

const WorkoutMetadata = styled(H6)`
  font-family: ${Tokens.fontFamily.nunitoRegular};
`;

const WorkoutDuration = styled(H5)`
  text-align: right;
  align-self: center;
  flex-basis: 20%;
  font-family: ${Tokens.fontFamily.nunitoBlack};
  color: ${Tokens.color.snowWhite100};
`;

const ActionContainer = styled.View``;

const ActionText = styled(H5)`
  font-family: ${Tokens.fontFamily.nunitoBlack};
  color: ${Tokens.color.snowWhite100};
`;

export const WorkoutCell = ({ item, onSwipeLeft }) => {
  const navigation = useNavigation();

  const navHandler = () => {
    navigation.navigate("TimerDetails", {
      workOutKey: item.key,
      isUpdating: true,
    });
  };

  const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 1],
    });
    return (
      <ActionContainer>
        <ActionText>Delete</ActionText>
      </ActionContainer>
    );
  };

  return (
    <Swipeable renderRightActions={RightActions}>
      <StyledWorkoutCell onPress={navHandler} key={item.key}>
        <WorkoutInfo>
          <WorkoutTitle numberOfLines={1}>{item.name}</WorkoutTitle>
          <WorkoutMetadata numberOfLines={1}>{item.metadata}</WorkoutMetadata>
        </WorkoutInfo>
        <WorkoutDuration numberOfLines={1}>
          {format(calculateDuration(item))}
        </WorkoutDuration>
      </StyledWorkoutCell>
    </Swipeable>
  );
};
