import React, { useContext, useState } from "react";
import styled from "styled-components/native";

import { H1 } from "../../components/Global/Primitives";
import { StyledInput } from "../../components/Input/Input";
import { StyledRoundButton } from "../../components/RoundButton/RoundButton";
import { Feather, Entypo } from "@expo/vector-icons";
import Tokens from "../../components/Global/Tokens";
import { StyledDropdownButton } from "../../components/DropdownButton/DropdownButton";
import { StyledButton } from "../../components/Button/Button";
import { WorkoutContext } from "../../Context/WorkoutContext";
import ExcercisePicker from "../../components/Picker/ExcercisePicker";
import RestPicker from "../../components/Picker/RestPicker";
import RepeatPicker from "../../components/Picker/RepeatPicker";
import { format, calculateDuration } from "../../libs/time-helper";
import moment from "moment";
import "moment-duration-format";
import Modal from "react-native-modal";

const TimerDetailsContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${Tokens.color.summerTime200};
  padding: 40px 20px 0;
`;

const DropdownContainer = styled.View`
  background-color: ${Tokens.color.blueMoon200};
  justify-content: space-between;
  height: 30%;
`;

const ButtonBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const defaultWorkoutSettings = {
  name: "New Workout...",
  metadata: "Length 0:00, Streak 5",
  duration: 0,
  key: 0,
  exercise: 0,
  rest: 0,
  repeat: 1,
};

export const TimerDetails = ({ navigation, route }) => {
  // NAVIGATION PROPS
  const { workOutKey = null, isUpdating = false } = route.params;

  // GLOBAL WORKOUTSETTINGS STATE
  const { workoutSettings, setWorkoutSettings, saveAsyncStorage } = useContext(
    WorkoutContext
  );

  let workOutData;
  if (!workOutKey) {
    // if no workOutKey
    workOutData = defaultWorkoutSettings;
  } else {
    // the specific workout that we are looking using object
    workOutData = workoutSettings[workOutKey];
  }

  // TEXT INPUT STATE
  const [workoutName, setWorkoutName] = useState(workOutData.name);

  // CONTAINS VALUES AND SET VALUE FUNCTION FOR ALL PICKERS
  const [excerciseInSeconds, setExcerciseInSeconds] = useState(
    workOutData.exercise
  );
  const [restInSeconds, setRestInSeconds] = useState(workOutData.rest);
  const [repeatMultiplier, setRepeatMultiplier] = useState(workOutData.repeat);

  // displays formatted duration in large text label
  const caluculatedDuration = calculateDuration({
    exercise: excerciseInSeconds,
    rest: restInSeconds,
    repeat: repeatMultiplier,
  });

  const formattedDuration = format(caluculatedDuration);

  // Picker local states
  const [isExcerciseModalVisible, setExcerciseModalVisible] = useState(false);
  const [isRestModalVisible, setRestModalVisible] = useState(false);
  const [isRepeatModalVisible, setRepeatModalVisible] = useState(false);

  // Toggles modal visibility for onPress in buttons
  const toggleExerciseModal = () => {
    setExcerciseModalVisible(!isExcerciseModalVisible);
  };

  const toggleRestModal = () => {
    setRestModalVisible(!isRestModalVisible);
  };

  const toggleRepeatModal = () => {
    setRepeatModalVisible(!isRepeatModalVisible);
  };

  // used for generating a random Key for workout item
  const uuid = Math.floor(Math.random() * 10000000 + 1);

  const handleSave = () => {
    if (isUpdating) {
      // grab everything from workoutSettings state
      let cloneData = { ...workoutSettings };

      // verifies workouSettings has a key otherwise it's null
      cloneData[workOutData.key] = {
        ...workOutData,
        exercise: excerciseInSeconds,
        name: workoutName,
        rest: restInSeconds,
        repeat: Number(repeatMultiplier),
      };

      setWorkoutSettings(cloneData);
      saveAsyncStorage();
    } else {
      let cloneData = {
        ...workoutSettings,
        [uuid]: {
          exercise: excerciseInSeconds,
          name: workoutName,
          rest: restInSeconds,
          repeat: Number(repeatMultiplier),
          key: uuid,
        },
      };

      setWorkoutSettings(cloneData);
      saveAsyncStorage();
    }
  };

  return (
    <TimerDetailsContainer>
      <ButtonBar>
        <StyledRoundButton onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left"
            size={24}
            color={`${Tokens.color.blueMoon200}`}
          />
        </StyledRoundButton>
        <StyledButton
          // TODO -  DISABLE BUTTON IF calculatedDuration IS GREATER THAN OR EQUAL TO 0 WITH TURNARARY OPERATOR
          primaryTextColor
          text="Save"
          size="small"
          onPress={handleSave}
        />
      </ButtonBar>
      <H1>{formattedDuration}</H1>
      <StyledInput
        changeHandler={setWorkoutName}
        workoutName={workoutName}
        // placeHolder={workoutName}
        placeHolder="New Workout..."
      />
      <StyledRoundButton
        primary
        tall
        wide
        onPress={() => {
          handleSave();
          navigation.navigate("TimerSession", {
            duration: caluculatedDuration,
            name: workoutName,
          });
        }}
        // TODO - CREATE BUTTON MORPHING SVG ANIMATION
        // TODO - CREATE FUNCTION TO START TIMER
      >
        <Entypo
          name="controller-play"
          size={64}
          color={`${Tokens.color.snowWhite100}`}
          borderRadius={5}
        />
      </StyledRoundButton>
      <DropdownContainer>
        <StyledDropdownButton
          title="Excercise"
          value={format(excerciseInSeconds)}
          onPress={toggleExerciseModal}
          onBackdropPress={() => setExcerciseModalVisible(true)}
        />
        <StyledDropdownButton
          title="Rest"
          value={format(restInSeconds)}
          onPress={toggleRestModal}
          onBackdropPress={() => setRestModalVisible(true)}
        />
        <StyledDropdownButton
          title="Repeat"
          value={`${repeatMultiplier}x`}
          onPress={toggleRepeatModal}
          onBackdropPress={() => setExcerciseModalVisible(true)}
        />

        <Modal
          style={{ flex: 1, justifyContent: "flex-end", margin: 0 }}
          isVisible={isExcerciseModalVisible}
          onBackdropPress={() => setExcerciseModalVisible(false)}
        >
          <ExcercisePicker
            setExcerciseInSeconds={setExcerciseInSeconds}
            excerciseInSeconds={excerciseInSeconds}
          />
          <StyledButton
            primaryTextColor
            text="Done"
            size="small"
            onPress={() => setExcerciseModalVisible(false)}
          />
        </Modal>
        <Modal
          style={{ flex: 1, justifyContent: "flex-end", margin: 0 }}
          isVisible={isRestModalVisible}
          onBackdropPress={() => setRestModalVisible(false)}
        >
          <RestPicker
            setRestInSeconds={setRestInSeconds}
            restInSeconds={restInSeconds}
          />
        </Modal>
        <Modal
          style={{ flex: 1, justifyContent: "flex-end", margin: 0 }}
          isVisible={isRepeatModalVisible}
          onBackdropPress={() => setRepeatModalVisible(false)}
        >
          <RepeatPicker
            setRepeatMultiplier={setRepeatMultiplier}
            repeatMultiplier={repeatMultiplier}
          />
        </Modal>
      </DropdownContainer>
    </TimerDetailsContainer>
  );
};
