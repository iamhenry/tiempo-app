import React, { useState } from "react";
import { View, Text } from "react-native";
import NumberPlease from "react-native-number-please";

export default function TimePicker() {
  // CREATE INITIAL VALUES FOR EACH DROPDOWN
  const initialExercise = [
    { id: "hr", value: 0 },
    { id: "min", value: 0 },
    { id: "sec", value: 1 },
  ];

  const exerciseConfig = [
    { id: "hr", label: "hr", min: 0, max: 23 },
    { id: "min", label: "min", min: 0, max: 59 },
    { id: "sec", label: "sec", min: 1, max: 59 },
  ];

  const initialRest = [
    { id: "min", value: 0 },
    { id: "sec", value: 0 },
  ];

  const restConfig = [
    { id: "min", label: "min", min: 0, max: 59 },
    { id: "sec", label: "sec", min: 1, max: 59 },
  ];

  const initialRepeat = [
    {
      id: "repeat",
      value: 0,
    },
  ];

  const repeatConfig = [{ id: "repeat", label: "x", min: 0, max: 25 }];

  // CREATE LOCAL STATES FOR EACH DROPDOWN
  const [exercise, setExercise] = useState(initialExercise);
  const [rest, setRest] = useState(initialRest);
  const [repeat, setRepeat] = useState(initialRepeat);

  // TODO - SAVE SETTINGS TO LOCAL STATE
  // TODO - PASS SAVED SETTINGS TO UPDATE WORKOUT CONTEXT
  // TODO - CREATE A CUSTOM HOOK TO MAKE PICKER MORE REUSABLE

  // INITIAL VALUE
  const initialBirthday = [
    { id: "hr", value: 0 },
    { id: "min", value: 0 },
    { id: "sec", value: 1 },
  ];

  // STATE AND STATE FUNCTION TO UPDATE STATE
  const [birthday, setBirtday] = useState(initialBirthday);

  // PICKER CONFIG
  const date = [
    { id: "hr", label: "hr", min: 0, max: 23 },
    { id: "min", label: "min", min: 0, max: 59 },
    { id: "sec", label: "sec", min: 1, max: 59 },
  ];

  console.log(exercise);

  // TODO - INCLUDE MOMENT JS FOR TIME FORMATTING
  const hour = exercise[0].value;
  const minute = exercise[1].value;
  const seconds = exercise[2].value;

  return (
    <View>
      <Text>
        Workout {hour}:{minute}:{seconds}
      </Text>
      <NumberPlease
        digits={exerciseConfig}
        values={exercise}
        onChange={(values) => setExercise(values)}
      />
    </View>
  );
}
