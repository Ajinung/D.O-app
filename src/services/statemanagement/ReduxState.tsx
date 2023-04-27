import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { userData } from "../../types";
import { agentData } from "../../types";

const initialState = {
  userDetails: {} as userData | null,
  directorDetails: {} as agentData | null,
  requestNumber: "" as string | null,
  //   Admin: {} as BusinessData | null,
};

const ReduxState = createSlice({
  name: "ecoBin",
  initialState,
  reducers: {
    userLogin: (state, { payload }: PayloadAction<userData>) => {
      state.userDetails = payload;
    },
    directorLogin: (state, { payload }: PayloadAction<agentData>) => {
      state.directorDetails = payload;
    },

    logout: (state) => {
      state.userDetails = null;
    },
    upDateRequest(state, { payload }) {
      state.requestNumber = payload;
    },
  },
});

export const { logout, userLogin, upDateRequest, directorLogin } =
  ReduxState.actions;

export default ReduxState.reducer;
