const verify = (req, res, next) => {
    const { key } = req.query;
    if (key !== 'apple') {
        return res.send('Invalid Key');
    }
    next();
}

module.exports = {
    verify
}