import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

const CartContainer = styled.section`
  position: relative;
  width: 150px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  transition: 0.3s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border: 6px solid black;
  background: linear-gradient(red 50%, white 50%);

  &:hover {
    scale: calc(1.1);
    transition: 0.3s;
    box-shadow: 0 0 5px 0;
  }

  img,
  span {
    position: absolute;
    top: 26px;
    z-index: 2;
    width: 96px;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    padding-top: 48px;

    border-top: 8px solid black;
  }

  p {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100px;
    height: 100px;
    border: 8px solid black;
    border-radius: 50%;
    background-color: white;
    z-index: 1;
  }
`;

export const Card = memo(({ pokemon }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const navigate = useNavigate();

  return (
    <CartContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      {isLoadingImage ? <span>로딩중...</span> : null}
      <img
        onLoad={() => setIsLoadingImage(false)}
        style={{ display: isLoadingImage ? "none" : "block" }}
        src={pokemon.front}
        alt={pokemon.name}
      />

      <p></p>
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CartContainer>
  );
});
