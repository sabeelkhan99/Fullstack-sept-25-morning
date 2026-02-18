const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    const random = Math.floor(Math.random() * 10);
    res.send(`Hello from the server ${random}`);
});

app.get('/cat', (req, res) => {
    res.send('<h1>Meeooow</h1>')
});

app.post('/cat', (req, res) => {
    res.status(201).send('POST Method: Meoooowww');
});

app.get('/dog', (req, res) => {
    res.send('Wooof Wooof');
});

app.get('/monkey', (req, res) => {
    res.send('Kho kho');
});

// https://www.google.com/search?q=burger 

app.get('/search', (req, res) => {
    const { q = 'something' } = req.query;
    res.send(`You are searching for ${q}`);
});

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    res.send(`You are looking for ${subredit} subredit`);
})

// Few things about headers 

// fetch('http://abc.com', {
//     method: 'POST',
//     body: JSON.stringify(),
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "*/*",
//         Authorization: "some user token to verify users integrity"
//     }
// })

app.listen(3000, () => {
    console.log('server started at port 3000');
});