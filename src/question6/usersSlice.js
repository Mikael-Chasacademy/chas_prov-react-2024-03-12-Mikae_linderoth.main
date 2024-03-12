/* import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newUser);
    },
    toggleComplete: (state, action) => {
      const users = state.find((users) => users.id === action.payload);
      if (users) {
        users.completed = !users.completed;
      }
    },

    // eventuella ytterligare reducers...
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer; */

import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newUser);
    },
    toggleComplete: (state, action) => {
      const user = state.find((user) => user.id === action.payload);
      if (user) {
        user.completed = !user.completed;
      }
    },
    deleteUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addUser, toggleComplete, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
