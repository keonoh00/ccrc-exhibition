import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { VirtualPath } from "../types/screens";

// Define a type for the slice state
interface VirtualRouterState {
  path: VirtualPath;
}

// Define the initial state using that type
const initialState: VirtualRouterState = {
  path: VirtualPath.HOME,
};

export const virtualRouterSlice = createSlice({
  name: "virtualRouter",
  initialState,
  reducers: {
    routeTo: (state, action: PayloadAction<VirtualPath>) => {
      state.path = action.payload;
    },
  },
});

export const { routeTo } = virtualRouterSlice.actions;

export default virtualRouterSlice.reducer;
