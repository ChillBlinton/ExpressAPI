const express = require('express');
const cors = require('cors');

let app = express();
let router = express.Router();

app.use(cors());
app.use(express.json());