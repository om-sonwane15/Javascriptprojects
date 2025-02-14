require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json()); 

const API_KEY = process.env.WEATHER_API_KEY; 

app.get("/", (req, res) => {
  res.send("Welcome to the Weather API!");
});

app.get("/weather", async (req, res) => {
  const { city } = req.query; 
  if (!city) {
    return res.status(400).json({ error: "City name is required!" });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    res.json(response.data); 
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
