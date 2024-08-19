import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

const CartContainer = styled.section`
  position: relative;
  width: 150px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  gap: 10px;
  transition: 0.3s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border: 6px solid black;
  background: linear-gradient(red 50%, white 50%);

  &:hover {
    scale: calc(1.1);
    transition: 0.3s;
    box-shadow: 0 0 5px 0;
  }

  img {
    position: absolute;
    top: 26px;
    z-index: 2;
    width: 96px;
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

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <CartContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.front} alt={pokemon.name} />
      <p></p>
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CartContainer>
  );
};
