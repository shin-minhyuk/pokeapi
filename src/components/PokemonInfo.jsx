import { Link } from "react-router-dom";

export const PokemonInfo = ({ el }) => {
  return (
    <div className="pokemon__list">
      <div>
        <Link to={`/detail/${el.id}`}>
          <h2 className="pokemon__name">{el.name}</h2>
          {/* <p className="pokemon__des">{el.description}</p> */}
          <img
            className="pokemon__front"
            src={el.front}
            alt={el.name + ` 앞 이미지`}
          />
          <ul className="pokemon__type">
            {el.type.map((type, idx) => (
              <li key={idx}>{type}</li>
            ))}
          </ul>
        </Link>
      </div>
    </div>
  );
};
