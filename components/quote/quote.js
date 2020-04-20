import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import {H4, H5} from '../Global/Primitives'

export default function Quote() {
  return (
    <View>
      <H4 dark style={styles.quote}>
        I hate every minute of training. But I said, don’t quit. Suffer now and
        live the rest of your life a champion.
      </H4>
      <H5 dark>– Muhammad Ali</H5>
    </View>
  );
}

const styles = StyleSheet.create({
  quote: {
    paddingBottom: 24
  },
});
