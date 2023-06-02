import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews } from "@/network/services";

// Define a type for the slice state
type TNewsState = {
  loading: boolean;
  news: any;
  error: string;
};

type TParams = {
  page: number;
  pageSize: number;
  sources?: {
    query: string;
  };
};

// Define the initial state using that type
const initialState: TNewsState = {
  loading: false,
  news: null,
  error: "",
};

export const getNews = createAsyncThunk(
  "getNews",
  async ({ page, pageSize, sources }: TParams) => {
    try {
      const response = await fetchNews(pageSize, page, sources?.query);

      return response?.data;
    } catch (error: any) {
      return error?.response?.data;
    }
  }
);

export const newsSlice = createSlice({
  name: "news",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      if (action?.payload?.status === "error") {
        state.loading = false;
        state.news = action.payload;
        state.error = action?.payload?.message;
      } else {
        state.loading = false;
        state.news = action.payload;
        state.error = "";
      }
    });
    builder.addCase(getNews.rejected, (state, action) => {
      state.loading = false;
      state.news = null;
      state.error = "error message";
    });
  },
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = newsSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default newsSlice.reducer;
