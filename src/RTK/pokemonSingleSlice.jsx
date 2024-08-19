import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemonSingleById } from "./fetchPokemonSingleById";

export const pokemonSingleSlice = createSlice({
  name: "pokemonSingle",
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonSingleById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemonSingleById.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchPokemonSingleById.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});
