import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Favorite from "./pages/Favorite";
import Detail from "./pages/Detail";
import Search from "./pages/Search";

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/favorite" element={<Favorite />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}

export default App;
