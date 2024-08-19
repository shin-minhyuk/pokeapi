import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";

// RTK 전역상태관리 해보기
// 스타일링 도구 써보기, 최적화 진행하기
// + 추가 기능구현
// 최소한의 css만 사용

const Detail = () => {
  const { id } = useParams();
  // const { data, loading } = useSelector((state) => state.pokemonSingle);

  const data = useSelector(selectPokemonById(Number(id)));

  console.log(id);
  // 한번에 3번씩 리렌더가 발생함.
  // 진짜 멍청하게도 기존 코드에서 본인이 전역상태를 사용하는 모든 위치에서
  // useEffect를 다 사용해서 데이터를 계속 불러왔음
  // 전역상태를 선언하고 꺼내쓸 생각을 해야하는데,
  // 상태를 선언하고 데이터를 사용하는 위치에서 계속 패칭하고 있던 것.
  // 전역 변수에 대한 이해도가 부족했음.
  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center border border-[gray] p-[10px] rounded-[10px]">
      <div className="text-[28px] font-[700] mb-[10px]">{data.name}</div>
      <div className="whitespace-pre-wrap text-center">{data.description}</div>
      <img src={data.front} alt={data.name} />
      <ul className="flex gap-2">
        {data.types.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Detail;
