require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const weatherRoutes = require('./routes/weatherRoutes');
const alertRoutes = require('./routes/alertRoutes');

const app = express();
connectDB();

app.use('/api/weather', weatherRoutes);
app.use('/api/alerts', alertRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
