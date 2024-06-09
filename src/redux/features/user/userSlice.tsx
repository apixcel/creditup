import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  emailOrNumber: string;
  password: string;
  type: "customer" | "guest";
}

const initialState: IUser = { emailOrNumber: "", password: "", type: "guest" };
const userSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
