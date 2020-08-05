import React, { useState, useEffect } from "react";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { HomeStack } from "./routes/homeStack";
import { WorkoutProvider } from "./Context/WorkoutContext";
import { loadStore } from "./libs/store-helper";

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

  // loads the stored data when loading
  useEffect(() => {
    let jsonValue = loadStore();
    jsonValue.then((val) => {
      // if (Object.keys(val).length === 0) {
      //   setWorkoutSettings(workoutSettings);
      // } else {
      setWorkoutSettings(val);
      // }
    });
  }, []);

  if (fontsLoaded) {
    return (
      <WorkoutProvider
        value={{
          workoutSettings,
          setWorkoutSettings,
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
