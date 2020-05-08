import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import { TimerDetails } from "../screens/TimerDetails/TimerDetails";
import { TimerSession } from "../screens/TimerSession/TimerSession";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TimerDetails" component={TimerDetails} />
        <Stack.Screen name="TimerSession" component={TimerSession} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
