const express = require('express');

const app = express();

app.use(express.static('src'));

app.listen(9001, () => console.log('Running on 9001'))

module.exports = app;