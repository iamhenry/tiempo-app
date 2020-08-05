import React from "react";
import { AsyncStorage } from "react-native";

export async function loadStore() {
  try {
    let jsonValue = await AsyncStorage.getItem("Workout");

    if (typeof jsonValue === "string") {
      return JSON.parse(jsonValue);
    }

    return {};
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function saveStore(workoutSettings) {
  try {
    await AsyncStorage.setItem("Workout", JSON.stringify(workoutSettings));
  } catch (err) {
    alert(err);
  }
}

export async function deleteStoreItem(key) {
  // let item;
  try {
    // remove Key item first
    const response = await AsyncStorage.getItem("Workout");

    if (typeof response !== "string") {
      return;
    }

    const workOutItems = JSON.parse(response);

    // let item = workOutItems[key] || {};
    delete workOutItems[key];
    await AsyncStorage.setItem("Workout", JSON.stringify(workOutItems));
  } catch (err) {
    console.log(err);
    // return item;
  }
}
