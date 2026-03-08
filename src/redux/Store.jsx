import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./CovidSlice";

const loadFromMemory = () => {
  try {
    const saved = localStorage.getItem("covid");

    if (saved === null) {
      return undefined; 
    }

    return {
      covid: JSON.parse(saved),
    };
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
  preloadedState: loadFromMemory(),
});

store.subscribe(() => {
  try {
    const state = store.getState(); 

    localStorage.setItem("covid", JSON.stringify(state.covid));
  } catch (err) {
    console.log("failed", err);
  }
});
