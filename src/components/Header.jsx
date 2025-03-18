import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ThemeSwitch from "../styles/ThemeSwitch";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? "#121212" : "#1976d2", // Tło nagłówka w zależności od motywu
        color: darkMode ? "#ffffff" : "#ffffff", // Kolor tekstu w zależności od motywu
        boxShadow: "none", // Usunięcie cienia
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Disney API Application
        </Typography>
        <ThemeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
