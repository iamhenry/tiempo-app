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
      name: "Yoga Stretch",
      metadata: "Length 3:25, Streak 15",
      duration: "3:25",
      key: "1",
    },
    {
      name: "HIIT Workout",
      metadata: "Length 3:25, Streak 15",
      duration: "7:00",
      key: "2",
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
