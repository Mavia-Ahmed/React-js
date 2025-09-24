import Masonry from "@mui/lab/Masonry";
import PhotoCard from "./PhotoCard";

const Gallery = ({ photos, onOpen, onDownload }) => {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          onOpen={() => onOpen(photo)}
          onDownload={onDownload}
        />
      ))}
    </Masonry>
  );
};

export default Gallery;
