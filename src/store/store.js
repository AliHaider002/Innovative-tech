import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import reloadSlice from "./slices/reloadSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    reload: reloadSlice,
  },
});
