Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates

Overview
This project is a real-time data processing system designed to monitor weather conditions and provide summarized insights using rollups and aggregates. It retrieves weather data from the OpenWeatherMap API, processes it, and generates daily summaries, alerts, and visualizations for user-configured thresholds. The system focuses on key weather parameters such as temperature and dominant weather conditions, offering insights for major Indian metro cities.

Objective
The system continuously gathers and processes weather data, providing valuable insights like daily weather summaries, temperature thresholds, and real-time alerts.

Key Features
Real-Time Data Processing: Weather data is retrieved every 5 minutes from the OpenWeatherMap API for metros in India (Delhi, Mumbai, Chennai, Bangalore, Kolkata, Hyderabad).
Data Rollups & Aggregates:
Daily Summaries: Includes average, maximum, and minimum temperatures and dominant weather condition.
Alerts: User-configurable thresholds for temperature or weather conditions trigger alerts when conditions are met.
Temperature Conversion: Converts temperature data from Kelvin to Celsius, with support for user preferences.
Visualizations: Displays daily summaries, historical trends, and alerts using an interactive UI.
Technology Stack
Frontend: React
Backend: Express, Node.js, MongoDB (MERN Stack)
API: OpenWeatherMap API
Data Source
Weather data is continuously fetched from the OpenWeatherMap API using the following parameters:

main: Main weather condition (e.g., Rain, Snow, Clear)
temp: Current temperature (°C)
feels_like: Perceived temperature (°C)
dt: Data timestamp (Unix)

Installation

Clone the repository:
git clone https://github.com/AnanyaSrivastava91/Weather-Monitoring.git

Navigate to the project directory and install dependencies for both frontend and backend:

bash:
cd weather-monitoring
npm install
cd client
npm install


Obtain an API key from OpenWeatherMap, and configure it in the backend.
Run the backend and frontend:
# Run backend (Express + MongoDB)
npm run backend

# Run frontend (React)
npm run client

API Configuration
Sign up at OpenWeatherMap to obtain a free API key.
Set up the API key in your environment configuration (e.g., .env file):
OPENWEATHER_API_KEY=your-api-key


Key Features
1. Weather Data Processing
The system retrieves weather updates at a configurable interval (default: every 5 minutes).
For each update, temperature is converted from Kelvin to Celsius.

2. Daily Weather Summary
Data is rolled up into daily summaries, including:
Average, maximum, and minimum temperature for the day.
Dominant weather condition based on occurrence.

3. Alerts
Users can configure thresholds for alerts (e.g., temperature exceeds 35°C for two consecutive updates).
When a threshold is breached, alerts are triggered and displayed on the UI or via notifications.

4. Visualization
Visualizes daily summaries, trends, and alerts on a user-friendly dashboard.
Test Cases
System Setup: Ensure the system connects to the OpenWeatherMap API using a valid API key.
Data Retrieval: Simulate API calls and validate data retrieval for the specified metro locations.
Temperature Conversion: Test conversion from Kelvin to Celsius based on user preference.
Daily Weather Summary: Simulate multiple weather updates and ensure correct daily aggregate calculations.
Alerting Thresholds: Configure thresholds, simulate data breaches, and verify proper alert triggering.
