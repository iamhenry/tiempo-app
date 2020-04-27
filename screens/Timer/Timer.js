import React from "react";
import { View, Text } from "react-native";
import { H1 } from "../../components/Global/Primitives";
import { StyledInput } from "../../components/Input/Input";

export const Timer = () => {
  return (
    <View>
      <H1>3:35</H1>
      <StyledInput />
    </View>
  );
};
