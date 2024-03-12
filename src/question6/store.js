import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    Users: userReducer,
  },
});

export default store;
