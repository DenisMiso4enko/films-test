import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchMovies } from "../../store/reducers/moviesSlice";

const Tv = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();

  return <div>tv</div>;
};

export default Tv;
