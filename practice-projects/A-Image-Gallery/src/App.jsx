import { useState, useEffect } from "react";
import { Box, Container, CircularProgress, Typography, Alert } from "@mui/material";
import axios from "axios";

import { useTheme } from "./context/ThemeContext";

import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Tags from "./components/Tags";
import Gallery from "./components/Gallery";
import ImageModal from "./components/ImageModal";
import Footer from "./components/Footer";

const App = () => {
  const { darkMode } = useTheme();

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);
  const [activeTag, setActiveTag] = useState("");

  const clientId = "dIkHLpiNQYiUlcB40ljhNnI_NWzJIXNJjxZKSBf8syc";

  // Fetch photos
  const fetchPhotos = async (url) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      setError("Failed to load images. Please try again later.");
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getPopularPhotos = async () => {
    const data = await fetchPhotos(
      `https://api.unsplash.com/photos?page=1&per_page=30&order_by=popular&client_id=${clientId}`
    );
    setPhotos(data);
    setActiveTag("");
    setSearchQuery("");
  };

  const searchPhotos = async (query) => {
    if (!query.trim()) {
      getPopularPhotos();
      return;
    }
    const data = await fetchPhotos(
      `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${query}&client_id=${clientId}`
    );
    setPhotos(data.results || []);
    setActiveTag(query);
  };

  const handleTagClick = async (tag) => {
    setSearchQuery(tag);
    setActiveTag(tag);
    const data = await fetchPhotos(
      `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${tag}&client_id=${clientId}`
    );
    setPhotos(data.results || []);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleDownload = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename || "image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  useEffect(() => {
    getPopularPhotos();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#f8fafc",
        transition: "background-color 0.3s ease",
      }}
    >
      <Hero />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={() => searchPhotos(searchQuery)}
        />

        {error && <Alert severity="error">{error}</Alert>}

        {loading && (
          <Box sx={{ textAlign: "center", my: 8 }}>
            <CircularProgress size={60} sx={{ color: "#667eea" }} />
            <Typography sx={{ mt: 2, color: darkMode ? "white" : "text.primary" }}>
              Loading amazing images...
            </Typography>
          </Box>
        )}

        {!loading && photos.length > 0 && (
          <>
            <Tags
              activeTag={activeTag}
              onTagClick={handleTagClick}
              onShowAll={getPopularPhotos}
              total={photos.length}
            />
            <Gallery
              photos={photos}
              onOpen={openImageModal}
              onDownload={handleDownload}
            />
          </>
        )}

        {!loading && photos.length === 0 && !error && (
          <Box sx={{ textAlign: "center", my: 8 }}>
            <Typography variant="h4" gutterBottom>
              🎨 No images found
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Try a different search term or explore trending images
            </Typography>
            <button onClick={getPopularPhotos}>Show Trending</button>
          </Box>
        )}
      </Container>

      <ImageModal
        open={modalOpen}
        onClose={closeImageModal}
        selectedImage={selectedImage}
        onDownload={handleDownload}
      />

      <Footer />
    </Box>
  );
};

export default App;
