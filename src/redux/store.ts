import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customer-detail/customerDetailSlice";
import stepReducer from "./features/stepCount/stepCount";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    step: stepReducer,
    user: userReducer,
    // [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(api.middleware),
    getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
