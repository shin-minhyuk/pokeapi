import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 생성한 데이터들을 전역에서 사용하기 위해서 RTK 사용
// 사용하는 데이터의 타입이 비동기 처리가 필요함. => AsyncThunk()
// reducers => 동기작업 // ExtraReducers => 비동기작업
export const fetchPokemonAllById = createAsyncThunk(
  "pokemon/fetchPokemonById",
  async (maxPokemonId) => {
    // i + 1 을 해줘야함, 인덱스는 0부터 시작하고 API의 id값은 1부터 시작함.
    const dataArray = Array.from(
      { length: maxPokemonId },
      (notUseValue, i) => i + 1
    );

    const fetchAPI = async (pokemonId) => {
      // 포켓몬 데이터 API
      const dataSpecies = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
      );

      // 포켓몬 타입 API
      const dataForm = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-form/${pokemonId}/`
      );

      // 포켓몬 이름, 설명, 사진 앞 뒤,
      const pokemonData = {
        id: pokemonId,
        name: dataSpecies.data.names.find((el) => el.language.name === "ko")
          .name,
        description: dataSpecies.data.flavor_text_entries.find(
          (el) => el.language.name === "ko"
        ).flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        types: dataForm.data.types.map((el) => el.type.name),
      };
      return pokemonData;
    };

    // 모든 fetch를 담아아함, 위에는 하나만 생성헀고, dataArray의 배열 수 만큼 만들어야함 => Promise.all
    const pokemonDatas = await Promise.all(dataArray.map((el) => fetchAPI(el)));
    return pokemonDatas;
  }
);
