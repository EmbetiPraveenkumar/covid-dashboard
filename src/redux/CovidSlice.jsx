import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCovidData = createAsyncThunk(
  "covid/fetchCovidData",
  async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  },
);

const covidSlice = createSlice({
  name: "covid",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCovidData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCovidData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(fetchCovidData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default covidSlice.reducer;
