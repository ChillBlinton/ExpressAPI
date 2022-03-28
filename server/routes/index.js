// const { append } = require("express/lib/response");

// append.use(/chirps, function (imp))

const express = require('express');
const chirpsRouter = require('./chirps');

const router = express.Router();

router.use('/chirps', chirpsRouter);

module.exports = router