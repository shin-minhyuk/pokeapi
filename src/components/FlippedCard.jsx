import { useState } from "react";
import styled from "styled-components";

const FlippedImgContainer = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transform: ${(props) =>
    props.$flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  width: 200px;
  height: 200px;
  transition: 0.3s;
  cursor: pointer;
`;

const FrontImg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
`;

const BackImg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export default function FlippedCard({ front, back }) {
  // 뒤집혀진 상태인지 아닌지
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <FlippedImgContainer
        onClick={() => setFlipped((prev) => !prev)}
        $flipped={flipped}
      >
        <FrontImg src={front} />
        <BackImg src={back} />
      </FlippedImgContainer>
    </>
  );
}
