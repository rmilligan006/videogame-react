import React from "react";
import "./SingleContent.css";
import { Badge } from "@mui/material";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  rating,
  background_image,
  name,
  released,
  metacritic,
}) => {
  return (
    <ContentModal id={id}>
      <div className="videogame">
        <Badge
          badgeContent={metacritic}
          color={metacritic > 50 ? "primary" : "secondary"}
        />
        <img src={background_image} alt={name} className="poster" />
        <p className="title">{name}</p>
        <span className="subtitle">{released}</span>
        <span className="subtitleOne">User Rating: {rating}/5</span>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
