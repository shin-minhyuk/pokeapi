import { configureStore } from "@reduxjs/toolkit";
import { pokemonAllSlice } from "./pokemonAllSlice";
import { pokemonSingleSlice } from "./pokemonSingleSlice";

export const store = configureStore({
  reducer: {
    pokemonAll: pokemonAllSlice.reducer,
    pokemonSingle: pokemonSingleSlice.reducer,
  },
});
