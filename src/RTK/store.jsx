import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemonSlice } from "./pokemonAllSlice";
import { pokemonSingleSlice } from "./pokemonSingleSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    pokemonSingle: pokemonSingleSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
