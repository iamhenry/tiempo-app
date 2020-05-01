import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

// TODO
// 1. CREATE STATE FOR SAVING WORKOUT SETTINGS
// 2. CREATE FUNCTION THAT WILL INVOKE THE PICKER FROM THE BUTTON
// 3. UPDATE THE STATE BASED ON NEW SETTINGS

export default function TimePicker() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});
