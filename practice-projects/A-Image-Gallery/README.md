# Lumina Gallery

A modern image gallery built with React and Material UI. It integrates with the Unsplash API to search, explore, and download high-quality photos.  

## Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://react-js-v3qt.vercel.app/)

## Features

- Browse trending and popular images
- Search photos by keyword
- Explore curated tags (Nature, Car, Art, etc.)
- Light and Dark mode support
- Image detail modal with photographer info
- Download images in high resolution
- Responsive masonry grid layout

## Tech Stack

- **React** (Vite)
- **Material UI (MUI)**  
- **Unsplash API**
- **Axios** for API requests
- **Context API** for theme management
- **Vercel** for deployment

## Project Structure
```
src/
├── components/  
│   ├── Header.jsx  
│   ├── Hero.jsx  
│   ├── SearchBar.jsx  
│   ├── Tags.jsx  
│   ├── Gallery.jsx  
│   ├── PhotoCard.jsx  
│   ├── ImageModal.jsx  
│   └── Footer.jsx  
├── context/  
│   └── ThemeContext.jsx  
├── App.jsx  
├── main.jsx  
└── index.css

```

## Getting Started

Clone the repository:

```
git clone https://github.com/Mavia-Ahmed/A-Image-gallery.git
cd A-Image-gallery
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Build for production:

```
npm run build
```

## API Key Setup

This project uses the Unsplash API.
Replace the demo client_id inside App.jsx with your own Unsplash API key:
```
const data = await fetchPhotos(
  `https://api.unsplash.com/photos?page=1&per_page=30&client_id=YOUR_ACCESS_KEY`
);
```
You can generate a free API key from Unsplash Developers.

## License

This project is licensed under the MIT License.
