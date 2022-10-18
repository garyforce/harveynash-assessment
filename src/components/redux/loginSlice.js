import { createSlice } from "@reduxjs/toolkit";
import { initialValue } from "../Signup/Signup.const";

export const signupSlice = createSlice({
  name: "signup",
  initialState: initialValue,
  reducers: {
    setSignupData: (state, action) => {
      return { ...state, [action.payload.formName]: action.payload.data };
    },
  },
});

export const { setSignupData } = signupSlice.actions;

export default signupSlice.reducer;
