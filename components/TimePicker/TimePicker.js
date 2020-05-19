import React, { useState } from "react";
import { View, Text } from "react-native";
import NumberPlease from "react-native-number-please";

// TODO
// 1. CREATE STATE FOR SAVING WORKOUT SETTINGS
// 2. CREATE FUNCTION THAT WILL INVOKE THE PICKER FROM THE BUTTON
// 3. UPDATE THE STATE BASED ON NEW SETTINGS IN USECONTEXT

export default function TimePicker() {
  const initialBirthday = [
    { id: "sec", value: 1 },
    { id: "min", value: 0 },
    { id: "hr", value: 0 },
  ];

  const [birthday, setBirtday] = useState(initialBirthday);

  const date = [
    { id: "sec", label: "sec", min: 1, max: 59 },
    { id: "min", label: "min", min: 0, max: 59 },
    { id: "hr", label: "hr", min: 0, max: 23 },
  ];

  return (
    <View>
      <Text>My birthday</Text>
      <NumberPlease
        digits={date}
        values={birthday}
        onChange={(values) => setBirtday(values)}
      />
    </View>
  );
}
