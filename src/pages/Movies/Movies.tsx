import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreMovies, fetchMovies } from "../../store/reducers/moviesSlice";
import { AppDispatch, RootState } from "../../store/store";
import ListItem from "../../components/ContentList/ListItem/ListItem";
import "./style.css";

const Movies = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const { movies, totalPages } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const handleLoadMoreMovies = () => {
    dispatch(fetchMoreMovies(page));
  };

  return (
    <div>
      <h1>Movies</h1>
      <div className="movies">
        {movies
          ? movies.map((movie) => (
              <ListItem
                key={movie.id}
                title={movie.title}
                id={movie.id}
                image={movie.poster_path}
              />
            ))
          : "empty"}
      </div>
      <button onClick={handleLoadMoreMovies}>Загрузить еще</button>
    </div>
  );
};

export default Movies;
