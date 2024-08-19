// favorite - 찜한 포켓몬 리스트를 표시합니다

import { useSelector } from "react-redux";
import { selectFilteredData } from "../RTK/selector";
import { Card } from "../components/Card";

// RTK 전역상태관리 해보기
// 스타일링 도구 써보기, 최적화 진행하기
// + 추가 기능구현
// 최소한의 css만 사용

const Favorite = () => {
  const filteredData = useSelector(selectFilteredData);
  console.log(filteredData);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-[20px] pt-[20px]">
        {filteredData.map((el) => (
          <Card key={el.id} pokemon={el} />
        ))}
      </div>
    </>
  );
};

export default Favorite;
