import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
const userSlice = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    adduser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.find((f) => f.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    },
  },
});
export const { adduser, updateUser } = userSlice.actions;
export default userSlice.reducer;
