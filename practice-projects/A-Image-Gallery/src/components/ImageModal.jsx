import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import { Close, Favorite, Download } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";

const ImageModal = ({ open, onClose, selectedImage, onDownload }) => {
  const { darkMode } = useTheme();

  if (!selectedImage) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent
        sx={{
          position: "relative",
          bgcolor: darkMode ? "#1e1e1e" : "white",
          p: 0,
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, zIndex: 2, color: "white" }}
        >
          <Close />
        </IconButton>

        {/* Image */}
        <Box
          component="img"
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
          sx={{ width: "100%", height: "auto", maxHeight: "80vh", objectFit: "cover" }}
        />

        {/* Info Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            backgroundColor: darkMode ? "#2c2c2c" : "#f9f9f9",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar src={selectedImage.user.profile_image.medium} />
            <Typography variant="body1">{selectedImage.user.name}</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Favorite sx={{ color: "red" }} />
              <Typography>{selectedImage.likes}</Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<Download />}
              onClick={() => onDownload(selectedImage.urls.full, `${selectedImage.id}.jpg`)}
              sx={{ bgcolor: "#667eea", "&:hover": { bgcolor: "#5a67d8" } }}
            >
              Download
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
