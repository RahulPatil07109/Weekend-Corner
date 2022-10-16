import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          bgcolor: "#2d313a",
          zIndex: 100,
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction
          sx={{ color: "white" }}
          label='Trending'
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label='Movies'
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label='TV Seires'
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label='Search'
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
