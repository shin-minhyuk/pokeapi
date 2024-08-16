import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonInfo } from "../components/pokemonInfo";
import "../styles/Main.scss";
import { fetchPokemonAllById } from "../RTK/fetchPokemonAllById";

// 포켓몬 정보는 pokeapi,co에서 받아와서 표시하세요/
// 다음 중 최소 2개의 페이지를 만드세요
// main - 전체 포켓몬 리스트를 표시합니다
// detail - 포켓몬 상세 정보를 표시합니다
// favorite - 찜한 포켓몬 리스트를 표시합니다
// search - 포켓몬 검색 결과 리스트를 표시합니다

// RTK 전역상태관리 해보기
// 스타일링 도구 써보기, 최적화 진행하기
// + 추가 기능구현
// 최소한의 css만 사용

const Main = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.pokemonAll);
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;

  useEffect(() => {
    dispatch(fetchPokemonAllById(151));
  }, []);

  return (
    <>
      {data
        ? data.slice(0, page * PER_PAGE).map((el) => (
            <div key={el.id} className="pokemon__">
              <PokemonInfo el={el} />
            </div>
          ))
        : ""}
      <button onClick={() => setPage((prev) => prev + 1)}>add Pokemon</button>
    </>
  );
};

export default Main;

// const pokemonDataList = () => {
//   return (
//     <div key={el.id}>
//       <h2 className="pokemon__name">{el.name}</h2>
//       <p className="pokemon__des">{el.description}</p>
//       <img
//         className="pokemon__front"
//         src={el.front}
//         alt={el.name + ` 앞 이미지`}
//       />
//       <ul className="pokemon__type">
//         {el.types.map((type, idx) => (
//           <li key={idx}>{type}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
