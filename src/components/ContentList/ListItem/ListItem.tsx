import React, { FC } from "react";
import "./index.css";
interface ListItem {
  title: string;
  id: string;
  image: string;
}

const ListItem: FC<ListItem> = ({ id, title, image }) => {
  return (
    <div className="movies__item">
      <h2>{title}</h2>
      <img src={"https://image.tmdb.org/t/p/original" + image} alt="poster" />
    </div>
  );
};

export default ListItem;
