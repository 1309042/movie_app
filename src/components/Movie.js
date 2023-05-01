import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={style.movie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} className={style.movie__img} />
      </Link>
      <div className={style.movie__data}>
        <h3 className={style.movie__title}>{title}</h3>
        <p className={style.movie__summary}>
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <ul className={style.movie__genres}>
          {genres.map((genre) => (
            <li key={genre} className={style.movie__genre}>
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;