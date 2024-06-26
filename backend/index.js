require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect to DB
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({extended : false}));

// Define Routes
app.use('/api/tasks',  require('./routes/tasks'));

app.get('/', (req, res) => res.send('API is running'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

