const express = require('express');
const { verify } = require('./middleware/auth');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// First middleware which is getting registered in middleware stack
app.use((req, res, next) => {
    console.log('Inside my first middleware');
    req.username = 'max';
    return next();
    console.log('Inside my first middleware after calling next');
});

// second middleware which is getting registered in middleware stack
app.use((req, res, next) => {
    console.log('Inside my second middleware');
    next();
    console.log('Inside my second middleware after calling next');
});

app.get('/hello', (req, res) => {
    const { username = 'Server' } = req;
    console.log('Inside hello route');
    res.send(`Hello from ${username}`);
});

app.get('/secret', verify, (req, res) => {
    res.send('I wear headphones in public so that i dont have to talk to anyone!');
});

app.listen(3000, () => {
    console.log('server started at port 3000');
})