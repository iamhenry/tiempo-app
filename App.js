import React, { useState } from "react";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { HomeStack } from "./routes/homeStack";
import { TimerSession } from "./screens/TimerSession/TimerSession";
import { WorkoutProvider } from "./Context/WorkoutContext";

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
  const [workoutSettings, setWorkoutSettings] = useState([
    {
      key: "1",
      name: "Yoga Stretch",
      metadata: "Streak 15",
      duration: "5:30",
      exercise: "0:20",
      rest: "0:05",
      repeat: "10",
    },
    {
      key: "2",
      name: "HIIT Workout",
      metadata: "Streak 15",
      duration: "7:00",
      exercise: "0:20",
      rest: "0:05",
      repeat: "10",
    },
  ]);

  if (fontsLoaded) {
    return (
      <WorkoutProvider value={{ workoutSettings, setWorkoutSettings }}>
        <HomeStack />
      </WorkoutProvider>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
