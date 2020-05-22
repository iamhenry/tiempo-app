import React, { useState } from "react";
import { View, Text } from "react-native";
import NumberPlease from "react-native-number-please";
import moment from "moment";

const usePicker = () => {
  // INITIAL VALUES FOR EACH DROPDOWN
  const initialWorkout = [
    { id: "hr", value: 0 },
    { id: "min", value: 0 },
    { id: "sec", value: 0 },
  ];

  // WORKOUT STATE
  const [workoutDetails, setWorkoutDetails] = useState(initialWorkout);

  // WORKOUT CONFIG FOR PICKER
  const workoutConfig = [
    { id: "hr", label: "hr", min: 0, max: 23 },
    { id: "min", label: "min", min: 0, max: 59 },
    { id: "sec", label: "sec", min: 0, max: 59 },
  ];

  const onChange = (values) => {
    setWorkoutDetails(values);
  };

  return [initialWorkout, workoutDetails, workoutConfig, onChange];
};

export default function TimePicker() {
  // CREATE INITIAL VALUES FOR EACH DROPDOWN
  const initialExercise = [
    { id: "hr", value: 0 },
    { id: "min", value: 0 },
    { id: "sec", value: 0 },
  ];

  const exerciseConfig = [
    { id: "hr", label: "hr", min: 0, max: 23 },
    { id: "min", label: "min", min: 0, max: 59 },
    { id: "sec", label: "sec", min: 0, max: 59 },
  ];

  // const initialRest = [
  //   { id: "min", value: 0 },
  //   { id: "sec", value: 0 },
  // ];

  // const restConfig = [
  //   { id: "min", label: "min", min: 0, max: 59 },
  //   { id: "sec", label: "sec", min: 1, max: 59 },
  // ];

  // const initialRepeat = [
  //   {
  //     id: "repeat",
  //     value: 0,
  //   },
  // ];

  // const repeatConfig = [{ id: "repeat", label: "x", min: 0, max: 25 }];

  // CREATE LOCAL STATES FOR EACH DROPDOWN
  const [exercise, setExercise] = useState(initialExercise);
  // const [rest, setRest] = useState(initialRest);
  // const [repeat, setRepeat] = useState(initialRepeat);

  // TODO - SAVE SETTINGS TO LOCAL STATE
  // TODO - PASS SAVED SETTINGS TO UPDATE WORKOUT CONTEXT
  // TODO - CREATE A CUSTOM HOOK TO MAKE PICKER MORE REUSABLE

  // moment({}) IS BEING SET AS AN EMPTY OBJECT FOR A RESET OF THE CURRENT TIME.
  // https://stackoverflow.com/questions/32813903/convert-thousands-of-seconds-to-hmmss-in-moment-js
  const hour = exercise[0].value;
  const minute = exercise[1].value;
  const second = exercise[2].value;
  const momentHour = moment({}).hour(hour).format("HH");
  const momentMinute = moment({}).minute(minute).format("mm");
  const momentSecond = moment({}).seconds(second).format("ss");

  return (
    <View>
      <Text>
        Workout {momentHour}:{momentMinute}:{momentSecond}
      </Text>
      <NumberPlease
        digits={exerciseConfig}
        values={exercise}
        onChange={(values) => setExercise(values)}
      />
    </View>
  );
}
