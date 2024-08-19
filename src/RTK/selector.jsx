import { createSelector } from "@reduxjs/toolkit";
import { getRegExp } from "korean-regexp";

const data = (state) => state.pokemon.data;

export const selectPokemonById = (pokemonId) =>
  createSelector(data, (data) => data.find((el) => el.id === pokemonId));

export const selectSearchByReg = (value) =>
  createSelector(data, (data) =>
    data.filter((el) => getRegExp(value).test(el.name))
  );
