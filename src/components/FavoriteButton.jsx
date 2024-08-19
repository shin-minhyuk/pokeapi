import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/pokemonAllSlice";
import { memo } from "react";

const FavoriteButton = memo(({ pokemonId }) => {
  const favorite = useSelector((state) => state.favorite);
  const isFavorite = favorite.some((item) => item === pokemonId);
  console.log("렌더");

  const dispatch = useDispatch();

  const onClick = (e) => {
    e.stopPropagation();

    // 전달하는 인자의 타입을 꼭 확인하기.
    if (isFavorite)
      dispatch(favoriteSlice.actions.removeFromFavorite({ pokemonId }));
    else dispatch(favoriteSlice.actions.addToFavorite({ pokemonId }));
  };

  return (
    <>
      <button
        onClick={onClick}
        className={isFavorite ? "text-[#FF0000] px-1" : "px-1"}
      >
        {isFavorite ? "♥" : "♡"}
      </button>
    </>
  );
});

export default FavoriteButton;
