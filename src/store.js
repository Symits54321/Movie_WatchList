import { configureStore } from "@reduxjs/toolkit";

// import comments reducer function here and include it inside of the store

import { movieReducer } from "./redux/reducers/movieReducer";

export const store = configureStore({
  reducer: {
               movieReducer
  }
});