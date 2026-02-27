const express = require('express');
const moviesRoutes = require('./routes/movies');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST','PATCH', 'PUT', 'DELETE']
}));

// Routes
app.use(moviesRoutes);


// Global Exception 
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).json({ success: false, message });
});

module.exports = app;