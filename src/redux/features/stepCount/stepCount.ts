import { createSlice } from "@reduxjs/toolkit";

const initialState: { step: number } = { step: 0 };
const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    stepCount: (state, action) => {
      state.step += action.payload.stepIncrease;
    },
    stepReset: (state) => {
      state.step = 0;
    },
  },
});

export const { stepCount, stepReset } = stepSlice.actions;
export default stepSlice.reducer;
