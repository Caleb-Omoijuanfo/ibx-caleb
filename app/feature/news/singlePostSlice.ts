import { createSlice } from "@reduxjs/toolkit";

type TSinglePost = {
  author: string;
  description: string;
  publishedAt: string;
  content: string;
  title: string;
};

// Define the initial state using that type
const initialState: TSinglePost = {
  author: "",
  description: "",
  publishedAt: "",
  content: "",
  title: "",
};

export const singlePostSlice = createSlice({
  name: "singlePost",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    update: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { update } = singlePostSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default singlePostSlice.reducer;
