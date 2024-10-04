import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reload: false,
};

export const reloadSlice = createSlice({
  name: "reload",
  initialState,
  reducers: {
    updateReload: (state, action) => {
      state.reload = !state.reload;
    },
  },
});

export const { updateReload } = reloadSlice.actions;

export default reloadSlice.reducer;
