// 포켓몬 정보는 pokeapi,co에서 받아와서 표시하세요/
// 다음 중 최소 2개의 페이지를 만드세요
// main - 전체 포켓몬 리스트를 표시합니다
// detail - 포켓몬 상세 정보를 표시합니다

// favorite - 찜한 포켓몬 리스트를 표시합니다
// search - 포켓몬 검색 결과 리스트를 표시합니다

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonSingleById } from "../RTK/fetchPokemonSingleById";

// RTK 전역상태관리 해보기
// 스타일링 도구 써보기, 최적화 진행하기
// + 추가 기능구현
// 최소한의 css만 사용

const Detail = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.pokemonSingle);
  const dispatch = useDispatch();

  // 한번에 3번씩 리렌더가 발생함.
  console.log(data);

  useEffect(() => {
    dispatch(fetchPokemonSingleById(id));
  }, [id]);

  return (
    <>
      {data && (
        <div key={data.id} className="pokemon__list">
          <h2 className="pokemon__name">{data.name}</h2>
          <p className="pokemon__des">{data.description}</p>
          <img className="pokemon__front" src={data.front} alt={data.name} />
          <ul className="pokemon__type">
            {data.types && data.types.map((el, idx) => <li key={idx}>{el}</li>)}
          </ul>
        </div>
      )}
    </>
  );
};

export default Detail;
