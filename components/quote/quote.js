import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { H4, H5 } from "../Global/Primitives";
import Tokens from "../Global/Tokens";

export default function Quote() {
  return (
    <View>
      <H4
        style={styles.quote}
        fontWeight={Tokens.fontWeight.regular}
        color={Tokens.color.blueMoon200}
      >
        I hate every minute of training. But I said, don’t quit. Suffer now and
        live the rest of your life a champion.
      </H4>
      <H5
        style={styles.quotePerson}
        color={Tokens.color.blueMoon200}
        fontWeight={Tokens.fontWeight.bold}
      >
        – Muhammad Ali
      </H5>
    </View>
  );
}

const styles = StyleSheet.create({
  quote: {
    paddingBottom: 24,
  },
  quotePerson: {
    marginBottom: 32,
  },
});
