const app = require('./app');

const PORT = 8080;

(function () {
    try {
        // await AppDataSource.connect();
        app.listen(PORT, () => {
            console.log(`server running at port ${PORT}`);
        })
    }
    catch (err) {
        console.log(err);
    }
})()