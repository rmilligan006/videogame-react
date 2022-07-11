import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AssignmentIcon from "@mui/icons-material/Assignment";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/upcominggames");
    else if (value === 2) navigate("/search");
  }, [value]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          backgroundColor: "#22577E",
          zIndex: 100,
        }}
      >
        <BottomNavigationAction
          style={{ color: "#fff" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />

        <BottomNavigationAction
          style={{ color: "#fff" }}
          label="Upcoming games"
          icon={<AssignmentIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#fff" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
