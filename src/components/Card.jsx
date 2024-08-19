import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

const CartContainer = styled.section`
  width: 150px;
  border: 1px solid #999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 10px;

  img {
    width: 120px;
    border: 1px solid red;
  }
`;

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <CartContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.front} alt={pokemon.name} />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CartContainer>
  );
};
