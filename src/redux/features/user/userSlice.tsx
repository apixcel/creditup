import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  emailOrNumber: string;
  password: string;
  type: "customer" | "agent";
}

const initialState: IUser = {
  emailOrNumber: "",
  password: "",
  type: "customer",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);

      state.emailOrNumber = action.payload.emailOrNumber;
      state.password = action.payload.password;
      state.type = action.payload.type;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
