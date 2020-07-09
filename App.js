import React, { useState, useEffect } from "react";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { HomeStack } from "./routes/homeStack";
import { WorkoutProvider } from "./Context/WorkoutContext";
import { AsyncStorage } from "react-native";

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
    "nunito-semibold": require("./assets/fonts/NunitoSans-SemiBold.ttf"),
    "nunito-black": require("./assets/fonts/NunitoSans-Black.ttf"),
    "playfair-regular": require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    "playfair-semibold": require("./assets/fonts/PlayfairDisplay-SemiBold.ttf"),
    "playfair-black": require("./assets/fonts/PlayfairDisplay-Black.ttf"),
  });
};

export default function App() {
  // this waits for the font to be loaded before the components
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [workoutSettings, setWorkoutSettings] = useState({
    "1": {
      key: "1",
      name: "Yoga Stretch",
      metadata: "Streak 15",
      exercise: 200,
      rest: 120,
      repeat: 3,
    },
    "2": {
      key: "2",
      name: "HIIT Workout",
      metadata: "Streak 15",
      exercise: 120,
      rest: 120,
      repeat: 2,
    },
  });

  // create async save function
  const saveAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem("Workout", JSON.stringify(workoutSettings));
    } catch (err) {
      alert(err);
    }
  };

  // create async load function
  const loadAsyncStorage = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem("Workout");

      if (jsonValue !== null) {
        setWorkoutSettings(JSON.parse(jsonValue));
      }
    } catch (err) {
      alert(err);
    }
  };

  // loads the stored data when loading
  useEffect(() => {
    loadAsyncStorage();
  }, []);

  // create async remove function
  const removeAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem("Workout");
    } catch (err) {
      alert(err);
    } finally {
      setWorkoutSettings("");
    }
  };

  if (fontsLoaded) {
    return (
      <WorkoutProvider
        value={{
          workoutSettings,
          setWorkoutSettings,
          saveAsyncStorage,
          loadAsyncStorage,
          removeAsyncStorage,
        }}
      >
        <HomeStack />
      </WorkoutProvider>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
