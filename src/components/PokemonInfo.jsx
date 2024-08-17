import { Link } from "react-router-dom";
import "../styles/Main.scss";
import { useState } from "react";

export const PokemonInfo = ({ el }) => {
  const [Clicked, setClicked] = useState(false);

  const onClick = (e) => {
    e.stopPropagation();
    setClicked((prev) => !prev);
  };

  /**
   * 버튼 클릭 시, 상태 업데이트, 데이터 post
   * axios.post("asdas/asdasd/asd", {
   *  bookmark
   * })
   */

  return (
    <div className="pokemonInfo__container">
      <Link to={`/detail/${el.id}`}>
        <div>
          <div className="pokemonInfo__titleBox">
            <h2 className="pokemonInfo__name">{el.name}</h2>
            <input type="checkbox" onClick={onClick} />
          </div>

          <img
            className="pokemonInfo__front"
            src={el.front}
            alt={el.name + ` 앞 이미지`}
          />
          <ul className="pokemonInfo__type">
            {el.types.map((type, idx) => (
              <li key={idx}>{type}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};
