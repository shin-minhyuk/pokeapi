// 포켓몬 정보는 pokeapi,co에서 받아와서 표시하세요/
// 다음 중 최소 2개의 페이지를 만드세요
// main - 전체 포켓몬 리스트를 표시합니다
// detail - 포켓몬 상세 정보를 표시합니다
// favorite - 찜한 포켓몬 리스트를 표시합니다
// search - 포켓몬 검색 결과 리스트를 표시합니다

import { getRegExp } from "korean-regexp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchPokemonAllById } from "../RTK/fetchPokemonAllById";
import { PokemonInfo } from "../components/pokemonInfo";

// RTK 전역상태관리 해보기
// 스타일링 도구 써보기, 최적화 진행하기
// + 추가 기능구현
// 최소한의 css만 사용

const Search = () => {
  const { data, loading } = useSelector((state) => state.pokemonAll);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonAllById(151));
  }, []);

  const params = searchParams.get("pokemon");
  const reg = getRegExp(params);
  const filteredData = data.filter((el) => reg.test(el.name));
  console.log(filteredData);

  return (
    <>
      <div className="main__container">
        <div className="main__inner">
          {filteredData
            ? filteredData.map((el) => <PokemonInfo key={el.id} el={el} />)
            : "데이터 패치 오류"}
        </div>
      </div>
    </>
  );
};

export default Search;
