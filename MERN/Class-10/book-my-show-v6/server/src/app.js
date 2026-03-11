const express = require('express');
const moviesRoutes = require('./routes/movies');
const userRoutes = require('./routes/user');
const theatreRoutes = require('./routes/theatres');
const screeningsRoutes = require('./routes/screenings');
const cors = require('cors');
const { ApiError } = require('./core/ApiError');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST','PATCH', 'PUT', 'DELETE']
}));

// Routes
app.use(moviesRoutes);
app.use(userRoutes);
app.use(theatreRoutes);
app.use(screeningsRoutes);


// Global Exception Handler
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        const { status = 500, message = 'Something went wrong' } = err;
        return res.status(status).json({ success: false, message });
    }
    return res.status(500).json({ success: false, message: 'Something went wrong' });
}); 

module.exports = app;