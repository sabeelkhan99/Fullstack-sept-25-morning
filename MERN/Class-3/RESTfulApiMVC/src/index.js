const express = require("express");
const movieRoutes = require('./routes/movies');

const app = express();

app.use(express.json());

app.use("/api/v1/movies", movieRoutes);

app.listen(8080, () => {
    console.log('server started at port 8080');
});