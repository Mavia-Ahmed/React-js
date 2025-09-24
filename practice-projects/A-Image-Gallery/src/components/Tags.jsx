import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const Tags = ({ activeTag, onTagClick, onShowAll, total }) => {
  const { darkMode } = useTheme();
  const tags = ["Nature", "Bike", "Car", "Food", "People", "Travel", "Animals"];

  return (
    <Box sx={{ mb: 4, textAlign: "center" }}>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: darkMode ? "white" : "text.primary",
        }}
      >
        {activeTag ? `Results for "${activeTag}" (${total})` : `Trending Images (${total})`}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
        <Button
          variant={activeTag === "" ? "contained" : "outlined"}
          onClick={onShowAll}
          sx={{ borderRadius: 3 }}
        >
          All
        </Button>
        {tags.map((tag) => (
          <Button
            key={tag}
            variant={activeTag === tag ? "contained" : "outlined"}
            onClick={() => onTagClick(tag)}
            sx={{ borderRadius: 3 }}
          >
            {tag}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Tags;
