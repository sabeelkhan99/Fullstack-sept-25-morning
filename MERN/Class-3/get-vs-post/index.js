const express = require('express');
const path = require('path');

const app = express();

// This will be executed for all the request irrespective of the HTTP method and path.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This route sends index.html explicitly file when you visit - http://localhost:3000
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    console.log(filePath);
    res.sendFile(filePath);
});


// http://localhost:3000/user?username=max&age=25
app.get('/user', (req, res) => {
    console.log(req.query);
    res.send('You made a GET Request'); 
});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('You made a POST request');
});


app.listen(3000, () => {
    console.log('server started at port 3000');
})