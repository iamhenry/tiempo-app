import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { H1 } from "../../components/Global/Primitives";
import { StyledInput } from "../../components/Input/Input";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";

export const Timer = () => {
  return (
    <View>
      <H1>3:35</H1>
      <StyledInput />
      <StyledRoundButton />
    </View>
  );
};
