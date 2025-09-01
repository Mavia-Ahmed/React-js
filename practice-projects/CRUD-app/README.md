# CRUD Application (React + MockAPI)

## Overview
This is a simple CRUD (Create, Read, Update, Delete) application built with React.  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://crud-lilac-chi.vercel.app/)  
Users can create posts with a **title**, **image URL**, and **description**.  
The application uses [MockAPI](https://mockapi.io/) as a backend service to store and retrieve data.

---

## Features
- Add a new post (with title, image, and description)  
- View all posts  
- Edit existing posts  
- Delete posts  

---

## Tech Stack
- **Frontend:** React  
- **HTTP Client:** Axios  
- **Backend API:** MockAPI  

---

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Mavia-Ahmed/practice-projects/CRUD-app.git
   ```
   
2. Install dependencies:
   ```
   npm install
   ```
   
3. Start the development server:
   ```
   npm run dev
   ```
   
4. Open in browser:
   ```
   http://localhost:5173
   ```


## Project Structure
```
src/
│── App.jsx        # Main application component
│── main.jsx       # Entry point
│── index.css      # Styles

```


## How to Use

1. Enter a title, image URL, and description in the form.  
2. Click the Add Post button → the new post will appear below.  
3. Each post includes two buttons:  
- Edit → Update the post content.  
- Delete → Remove the post.  

## Notes
- Ensure the image URL is valid, otherwise a broken image may appear.  
- This project is intended for learning and practice purposes.
