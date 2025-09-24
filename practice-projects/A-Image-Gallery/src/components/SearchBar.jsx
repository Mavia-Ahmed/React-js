import { Box, TextField, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const { darkMode } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 4,
        gap: 1,
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search for photos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          flexGrow: 1,
          maxWidth: 600,
          backgroundColor: darkMode ? "#1e1e1e" : "white",
          borderRadius: 2,
        }}
      />
      <Button
        type="submit"
        variant="contained"
        startIcon={<Search />}
        sx={{
          bgcolor: "#667eea",
          "&:hover": { bgcolor: "#5a67d8" },
          borderRadius: 2,
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
