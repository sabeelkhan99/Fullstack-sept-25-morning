const express = require('express');
const app = express();
const { BadRequestError, InternalServerError, NotFoundError, AuthenticationError, ApiError } = require('./core/ApiError');


app.get('/user', (req, res) => {
    res.send('User route');
})

app.get('/hello', (req, res) => {

    // validation
    if (false) {
        throw new BadRequestError('my first bad request');
    }
    if (false) {
        throw new NotFoundError('Data you are looking for is not available');
    }
    if (true) {
        throw new InternalServerError('Internal server error');
    }
    res.send('Success response from hello route'); 
});

// Global Exception Handler
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        const { status=500, message='Something went wrong' } = err;
        return res.status(status).json({ success: false, message });
    }
    return res.status(500).json({ success: false, message: 'Something went wrong' });
});

app.listen(3000, () => {
    console.log('server started at port 3000');
})