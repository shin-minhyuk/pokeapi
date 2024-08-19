import { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/Main.scss";
import { Loading } from "../components/Loading";
import { Card } from "../components/Card";
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

const StyledAddBtn = styled.button`
  position: fixed;
  bottom: -10px;
  padding: 10px;
  margin-bottom: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  transition: 0.3s;
  border-radius: 8px;
  background-color: rgba(122, 122, 122, 0.7);
  color: white;
  z-index: 3;

  &:hover {
    scale: calc(1.1);
    transition: 0.3s;
    background-color: #fffb2b;
    color: black;
  }
`;

export default function Main() {
  const { data, loading } = useSelector((state) => state.pokemon);
  const [page, setPage] = useState(1);
  const PER_PAGE = 18;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center gap-[20px]">
      <div className="flex justify-center flex-wrap gap-[20px] pt-[20px]">
        {data?.slice(0, page * PER_PAGE).map((el) => (
          <Card key={el.id} pokemon={el} />
        ))}
      </div>
      <StyledAddBtn onClick={() => setPage((prev) => prev + 1)} className="">
        add Pokemon
      </StyledAddBtn>
    </div>
  );
}
