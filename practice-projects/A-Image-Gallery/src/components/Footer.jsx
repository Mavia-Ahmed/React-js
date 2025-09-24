import { Box, Typography } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <Box
      sx={{
        py: 3,
        mt: 6,
        backgroundColor: darkMode ? "#1e1e1e" : "#f1f5f9",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ color: darkMode ? "#ccc" : "text.secondary" }}>
        © {new Date().getFullYear()} Lumina Gallery. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
