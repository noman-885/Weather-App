const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Weather backend is running!");
});

app.get("/weather", async (req, res) => {

    const city = req.query.city;

    if (!city) {
        return res.status(400).json({
            message: "City is required"
        });
    }

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});