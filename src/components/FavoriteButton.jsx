import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/pokemonAllSlice";

export default function FavoriteButton({ pokemonId }) {
  const favorite = useSelector((state) => state.favorite);
  const isFavorite = favorite.some((item) => item === pokemonId);
  console.log(favorite);
  console.log(isFavorite);

  const dispatch = useDispatch();

  const onClick = (e) => {
    e.stopPropagation();

    // 전달하는 인자의 타입을 꼭 확인하기.
    if (isFavorite)
      dispatch(favoriteSlice.actions.removeFromFavorite({ pokemonId }));
    else dispatch(favoriteSlice.actions.addToFavorite({ pokemonId }));
    console.log(isFavorite);
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
}
