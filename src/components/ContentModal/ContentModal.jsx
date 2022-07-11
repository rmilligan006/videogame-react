import React, { useEffect, useState } from "react";
import { Backdrop } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import "./ContentModal.css";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const paper = {
  width: "90%",
  height: "80%",
  backgroundColor: "#fff",
  border: "1px solid #1363DF",
  color: "white",
};

export default function ContentModal({
  children,
  id,
  rating,
  background_image,
  name,
  released,
  metacritic,
}) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        className=""
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content &&
              content.map((c) => (
                <div className={paper} key={c.id}>
                  <div className="ContentModal">
                    <img src={background_image} alt={c.title} />
                    <div className="ContentModal__about">
                      <span className="ContentModal__title">
                        {content.name}
                        {content.released}
                      </span>
                      <div className="metacritic-box-chart">
                        {content.metacritic}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
