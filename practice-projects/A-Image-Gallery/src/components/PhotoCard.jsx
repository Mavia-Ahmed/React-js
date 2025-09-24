import { Card, CardMedia, IconButton } from "@mui/material";
import { Download } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";

const PhotoCard = ({ photo, onOpen, onDownload }) => {
  const { darkMode } = useTheme();

  return (
    <Card
      sx={{
        cursor: "pointer",
        position: "relative",
        borderRadius: 0,
        overflow: "hidden",
        backgroundColor: darkMode ? "#1e1e1e" : "white",
        "&:hover .download-btn": {
          opacity: 1,
          transform: "translateY(0)",
        },
      }}
      onClick={onOpen}
    >
      <CardMedia
        component="img"
        image={photo.urls.small}
        alt={photo.alt_description || "Unsplash image"}
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* Download Button on Hover */}
      <IconButton
        className="download-btn"
        sx={{
          position: "absolute",
          bottom: 12,
          right: 12,
          bgcolor: "rgba(0,0,0,0.6)",
          color: "white",
          borderRadius: 2,
          p: 1,
          opacity: 0,
          transform: "translateY(10px)",
          transition: "all 0.3s ease",
          "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
        }}
        onClick={(e) => {
          e.stopPropagation(); // modal na khule
          onDownload(photo.urls.full, `${photo.id}.jpg`);
        }}
      >
        <Download />
      </IconButton>
    </Card>
  );
};

export default PhotoCard;
