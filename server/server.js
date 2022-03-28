const express = require('express');
const cors = require('cors');


let app = express();
let router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.static('client'));
app.use('/api', apiRouter);



app.listen(3000, () => {
    console.log('Server listening on port 3000!');
};