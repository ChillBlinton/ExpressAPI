const express = require('express');
const chirpStore = require('../chirpstore');

const router = express.Router();

router.get('/:id?', (req, res) => {
	if (req.params.id) {
		let chirp = chirpStore.GetChirp(req.params.id);
		res.json(chirp);
	} else {
		let chirps = chirpStore.GetChirps();
		res.json(chirps);
	}
});

// router.get(../chirpsstore.js:id, function (req, res) {
   
//     res.json(data); //send resource
// });



// router.post(../chirpsstore.js, function (req, res) {
//     //save resource
//     res.json(id); //or sendStatus(200)
// });


// router.put(../chirpsstore.js, function (req, res) {
//     //update resource
//     res.sendStatus(200);

// });


// router.delete(../chirpsstore.js:id, function (req, res) {
//     //delete resource
//     res.sendStatus(200);

// });

module.exports = router; 


// {
//         "001": {
//             "name": "Chungus",
//             "cheep": "Where amongus?"
//         },
//         "002": {
//             "name": "Bruhngus",
//             "cheep": "Smelt like Fungus"
//         },
//         "003": {
//             "name": "Youngus",
//             "cheep": "Drop the Dungus"
//         }
// }