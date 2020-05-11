import React from "react";

const WorkoutContext = React.createContext();

const WorkoutProvider = WorkoutContext.Provider;
const WorkoutConsumer = WorkoutProvider.Consumer;

export { WorkoutContext, WorkoutProvider, WorkoutConsumer };
