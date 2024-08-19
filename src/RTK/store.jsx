import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemonSlice } from "./pokemonAllSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
