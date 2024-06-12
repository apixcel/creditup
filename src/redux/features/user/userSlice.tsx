import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  emailOrNumber: string;
  password: string;
  userType: "customer" | "agent";
}

const initialState: IUser = {
  emailOrNumber: "",
  password: "",
  userType: "customer",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);

      state.emailOrNumber = action.payload.emailOrNumber;
      state.password = action.payload.password;
      state.userType = action.payload.userType;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
