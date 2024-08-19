import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

const CartContainer = styled.section`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 10px;
  transition: 0.3s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  &:hover {
    scale: calc(1.1);
    transition: 0.3s;
    box-shadow: 0 0 5px 0;
    background-color: #fffb2b3e;
  }

  img {
    width: 120px;
  }

  div {
    padding-bottom: 8px;
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
