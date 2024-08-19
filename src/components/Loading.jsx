import PikaLoading from "../assets/PikaLoading.webp";
import styled from "styled-components";

const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fbff25;
`;

export const Loading = () => {
  return (
    <StyledLoading>
      <img src={PikaLoading} alt="피카츄 로딩화면" />
    </StyledLoading>
  );
};
