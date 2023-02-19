import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import editCodeReducer from "./features/editCode/editCodeSlice";
import searchUserReducer from "./features/searchUser/searchUserSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    editCode:editCodeReducer,
    searchUser:searchUserReducer,
  },
});
