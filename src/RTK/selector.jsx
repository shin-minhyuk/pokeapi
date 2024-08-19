import { createSelector } from "@reduxjs/toolkit";
import { getRegExp } from "korean-regexp";

export const selectPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data,
    (data) => data.find((el) => el.id === pokemonId)
  );

export const selectSearchByReg = (value) =>
  createSelector(
    (state) => state.pokemon.data,
    (data) => data.filter((el) => getRegExp(value).test(el.name))
  );

export const selectFilteredData = createSelector(
  (state) => state.pokemon.data,
  (state) => state.favorite,
  (data, favorite) => {
    return data.filter((el) => favorite.includes(el.id));
  }
);
