# Weather App

A simple React-based weather application that fetches real-time weather data using the [OpenWeather API](https://openweathermap.org/api).  
The app allows users to search for any city and displays current weather details such as temperature, humidity, wind speed, and weather conditions.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://react-js-8o2v.vercel.app/)


---

## Features

- Search weather by city name.  
- Real-time weather data from OpenWeather API.  
- Displays:  
  - City and country  
  - Temperature (°C)  
  - Weather description  
  - Humidity  
  - Wind speed  
- Responsive and user-friendly UI.

---

## Technologies Used

- **React** – Frontend framework  
- **CSS** – Styling  
- **OpenWeather API** – Weather data provider  

---

## Project Structure
```
/weather-app
│── /src
│ ├── /components
│ │ └── Weather.jsx # Component for displaying weather
│ ├── App.jsx # Main app logic
│ ├── index.js # Entry point
│ └── App.css # Styling
│── package.json
│── README.md
```


---

## Installation & Setup

1. **Clone the repository**  
   ```
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
  ```
  npm install
  ```
3. **Add your API Key**
-   Create a .env file in the root directory.  
-   Add your OpenWeather API key:
  ```
  REACT_APP_API_KEY=your_api_key_here
  ```
4. **Run the application**
  ```
  npm start
  ```


## Usage

1. Enter a city name in the search bar.
2. Press Search.  
3. View the weather details of the city.


## Example

For **Lahore, Pakistan:**
```
🌡️ 30°C
☁️ Clear sky
💧 Humidity: 50%
🌬️ Wind: 3 m/s
```

## License

This project is open-source and free to use.
