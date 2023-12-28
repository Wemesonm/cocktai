import { configureStore} from "@reduxjs/toolkit";
import beverageSlice from "./slices/beverageSlice";

export const store = configureStore({
  reducer:{
    beverage: beverageSlice,
  },
})