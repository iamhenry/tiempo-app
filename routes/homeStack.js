import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home/Home";
import { TimerDetails } from "../screens/TimerDetails/TimerDetails";

const screens = {
  Home: {
    screen: Home,
  },
  TimerDetails: {
    screen: TimerDetails,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
