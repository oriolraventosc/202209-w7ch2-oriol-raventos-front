import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { robotReducer } from "./features/RobotsSlice/RobotsSlice";
import { usersReducer } from "./features/UsersSlice/UsersSlice";

export const store = configureStore({
  reducer: {
    robotsActions: robotReducer,
    usersReducer: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
