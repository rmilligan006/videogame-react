import React, { useEffect, useState } from "react";
import axios from "axios";

import CustomPagination from "../../CustomPagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";

const Upcoming = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
      return `0${month}`;
    } else {
      return month;
    }
  };
  //Getting the date
  const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
      return `0${day}`;
    } else {
      return day;
    }
  };

  //Current day/month/year
  const currentYear = new Date().getFullYear();
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();
  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
  const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

  const fetchGames = async () => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-released&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchGames();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Upcoming Games</span>
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

      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Upcoming;
