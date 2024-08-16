import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemonById } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  // 동기적 상태 변경
  reducers: {},

  // 비동기적 상태 변경
  extraReducers: (builder) => {
    // 대기 상태 => 로딩중
    builder.addCase(fetchPokemonById.pending, (state) => {
      state.loading = true;
    });
    // 데이터 패치 실패 => 로딩중 아님
    builder.addCase(fetchPokemonById.rejected, (state) => {
      state.loading = false;
    });
    // 데이터 패치 성공 => 로딩중 아님,
    builder.addCase(fetchPokemonById.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});
