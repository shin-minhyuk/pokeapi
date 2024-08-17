import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonInfo } from "../components/pokemonInfo";
import "../styles/Main.scss";
import { fetchPokemonAllById } from "../RTK/fetchPokemonAllById";
import { Loading } from "../components/Loading";

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

// const PokemonBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const PokemonInner = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;

//   margin: 0 100px;
//   margin-bottom: 20px;
//   padding: 10px;
// `;

const Main = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.pokemonAll);
  const [page, setPage] = useState(1);
  const PER_PAGE = 18;

  useEffect(() => {
    dispatch(fetchPokemonAllById(151));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main__container">
      <div className="main__inner">
        {data
          ? data
              .slice(0, page * PER_PAGE)
              .map((el) => <PokemonInfo key={el.id} el={el} />)
          : "데이터 패치 오류"}
      </div>
      <button onClick={() => setPage((prev) => prev + 1)}>add Pokemon</button>
    </div>
  );
};

export default Main;
