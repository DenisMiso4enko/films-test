import React, { FC } from "react";
import ListItem from "./ListItem/ListItem";

interface IContentList {
  data: any;
}

const ContentList: FC<IContentList> = ({ data }) => {
  console.log(data);
  return (
    <ListItem
      key={data.id}
      title={data.title}
      id={data.id}
      image={data.poster_path}
    />
  );
};

export default ContentList;
