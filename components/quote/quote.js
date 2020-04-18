import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Quote() {
  return (
    <View style={styles.root}>
      <Text style={styles.quote}>
        I hate every minute of training. But I said, don’t quit. Suffer now and
        live the rest of your life a champion.
      </Text>
      <Text style={styles.person}>– Muhammad Ali</Text>
    </View>
  );
}

const styles = {};
