import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; 

const initialState = {
  users: [],
  update: false,
  updateUser: {},
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({ id: uuidv4(), ...action.payload });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUserData: (state, action) => {
      const { id, name, email, password } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          name,
          email,
          password,
        };
      }
    },
    resetUser: (state, action) => {
      state.users = [];
    },
    changeUpdate: (state, action) => {
      state.update = !state.update;
      state.updateUser = action.payload;
    },
  },
});

export const { addUser, deleteUser, updateUserData, resetUser, changeUpdate } =
  userSlice.actions;
export default userSlice.reducer;
