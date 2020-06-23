import React from "react";

import { Feather } from "@expo/vector-icons";
import { H1, H5 } from "../../components/Global/Primitives";
import styled from "styled-components/native";
import Tokens from "../../components/Global/Tokens";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";
import { useNavigation } from "@react-navigation/native";
import { format } from "../../libs/time-helper";

const TimerSessionContainer = styled.View`
  background-color: ${Tokens.color.summerTime200};
  display: flex;
  flex: 1;
`;

const TimerCountdownLabel = styled(H1)`
  /* TODO: FIGURE HOW TO DISPLAY NUMERAL FONT STYLE FOR THIS FONT */
  font-family: ${Tokens.fontFamily.playfairBlack};
`;

const TimerDetails = styled.View``;

const TimerButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimerSession = ({ route }) => {
  // TODO: How to Create a Simple React Countdown Timer
  // https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3

  const navigation = useNavigation();
  const { duration, name } = route.params;

  console.log("Duration:", duration);

  return (
    <TimerSessionContainer>
      <TimerDetails>
        <TimerCountdownLabel>{format(duration)}</TimerCountdownLabel>
        <H5>{name} 1/10</H5>
      </TimerDetails>
      <TimerButtonContainer>
        <StyledRoundButton onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color={`${Tokens.color.blueMoon200}`} />
        </StyledRoundButton>
        <StyledRoundButton tall wide primary>
          <Feather
            name="pause"
            size={48}
            color={`${Tokens.color.snowWhite100}`}
          />
        </StyledRoundButton>
        <StyledRoundButton>
          <Feather
            name="rotate-ccw"
            size={24}
            color={`${Tokens.color.blueMoon200}`}
          />
        </StyledRoundButton>
      </TimerButtonContainer>
    </TimerSessionContainer>
  );
};
