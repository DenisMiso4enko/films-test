import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreMovies, fetchMovies } from "../../store/reducers/moviesSlice";
import { AppDispatch, RootState } from "../../store/store";
import ListItem from "../../components/ContentList/ListItem/ListItem";
import "./style.css";

const Movies = () => {
  const [page, setPage] = useState(1);
  // const { currentPage } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();
  const { movies, totalPages } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [page]);

  const handleLazyLoader = () => {
    let height = document.documentElement.scrollHeight;
    let top = document.documentElement.scrollTop;
    let Window = window.innerHeight;
    if (Window + top + 1 >= height) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleLazyLoader);
    return () => {
      window.removeEventListener("scroll", handleLazyLoader);
    };
  }, [page]);

  // const handleLoadMoreMovies = () => {
  //   // dispatch(setPage(currentPage! + 1));
  //   setPage((prevState) => prevState + 1);
  //   dispatch(fetchMoreMovies(page));
  // };

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
      {/*<button onClick={handleLoadMoreMovies}>Загрузить еще</button>*/}
    </div>
  );
};

export default Movies;
