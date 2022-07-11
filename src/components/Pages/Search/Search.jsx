import { TextField } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import Tabs from "@mui/material/Tabs";
import axios from "axios";
import Tab from "@mui/material/Tab";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "./Search.css";
import SingleContent from "../../SingleContent/SingleContent";

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState();
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${searchText}&page_size=1`
      );
      setContent(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [type, page]);

  return (
    <div className="Search">
      <TextField
        style={{ width: "80%", color: "#fff" }}
        className="searchBox"
        label="Search"
        variant="filled"
        color="info"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        variant="contained"
        style={{ height: "55px" }}
        onClick={fetchSearch}
      >
        <SearchRounded />
      </Button>

      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              name={c.name}
              background_image={c.background_image}
              released={c.released}
              metacritic={c.metacritic}
              rating={c.rating}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
