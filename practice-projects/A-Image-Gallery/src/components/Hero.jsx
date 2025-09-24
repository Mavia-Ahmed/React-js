import { Box, Typography, Container, IconButton } from "@mui/material";
import { AccountCircle, Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "white", fontFamily: "'Montserrat', sans-serif" }}
        >
          L U M I N A
          <br />
          G A L L E R Y
        </Typography>

        <Box>
          <IconButton color="inherit" onClick={toggleDarkMode} sx={{ color: "white" }}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton color="inherit" sx={{ color: "white" }}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Box>

      {/* Hero Text */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", md: "3.5rem" },
            textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Your Daily Dose of Inspiration
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            fontSize: { xs: "1rem", md: "1.2rem" },
            textShadow: "0px 2px 6px rgba(0,0,0,0.5)",
          }}
        >
          Search and collect photos that match your ideas & projects.
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
