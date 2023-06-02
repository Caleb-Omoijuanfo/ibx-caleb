import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSources } from "@/network/services";

// Define a type for the slice state
type TSourceState = {
  loading: boolean;
  source: Tdata | null;
  errorMessage: string;
  status: string;
  sourceQuery: string;
};

type Tsource = {
  category: string;
  name: string;
  id: string;
};

type Tdata = {
  sources: Tsource[];
};

// Define the initial state using that type
const initialState: TSourceState = {
  loading: false,
  source: null,
  errorMessage: "",
  status: "",
  sourceQuery: "",
};

export const getSources = createAsyncThunk("getSource", async () => {
  const response = await fetchSources();
  console.log("response: ", response);
  return response?.data as Tdata;
});

export const sourceSlice = createSlice({
  name: "source",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSources.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSources.fulfilled, (state, action) => {
      state.loading = false;
      state.source = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(getSources.rejected, (state) => {
      state.loading = false;
      state.source = null;
      state.errorMessage = "error message";
    });
  },
  reducers: {
    getSourceQuery: (state, action) => {
      console.log("payload: ", action?.payload);
      return {
        ...state,
        sourceQuery: action?.payload,
      };
    },
  },
});

export const { getSourceQuery } = sourceSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default sourceSlice.reducer;
