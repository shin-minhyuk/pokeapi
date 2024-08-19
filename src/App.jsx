import "./App.scss";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Favorite from "./pages/Favorite";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonById } from "./RTK/fetchPokemonAllById";
import { Loading } from "./components/Loading";
import styled from "styled-components";

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

const StyledDiv = styled.div`
  background-color: transparent;
  padding: 8px;
  border: 1px solid #999999;
  border-radius: 8px;

  input {
    background-color: transparent;
    border-bottom: none;
    padding-left: 12px;
  }
`;

function App() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.pokemon);

  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
    navigate(`/search?pokemon=${value}`);
  };

  useEffect(() => {
    dispatch(fetchPokemonById(151));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <nav className="bg-[#fffb2bff]  flex gap-[20px] items-center justify-between px-[36px] w-full">
        <h1
          onClick={() => navigate("/")}
          className="text-[40px] text-center p-[12px] cursor-pointer"
        >
          포켓몬 도감
        </h1>
        <div className="flex gap-[20px] items-center">
          <StyledDiv>
            <span>🔎</span>
            <input
              type="text"
              name="search"
              onChange={onChange}
              placeholder="Search"
            />
          </StyledDiv>
          <Link
            className="border border-[#999999] rounded-[8px] py-[8px] px-[12px]"
            to={"/"}
          >
            메인
          </Link>
          <Link
            className="border border-[#999999] rounded-[8px] py-[8px] px-[12px]"
            to={"/favorite"}
          >
            찜목록
          </Link>
        </div>
      </nav>
      <div className="h-[36px] bg-white w-full border-t-2 border-black"></div>
      <main className="w-full h-full flex justify-center">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
