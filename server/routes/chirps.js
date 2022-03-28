const express = require('express');
const chirpStore = require('../chirpstore');

const router = express.Router();

router.get('/:id?', (req, res) => {
	if (req.params.id) {
		const chirp = chirpStore.GetChirp(req.params.id);
		res.json(chirp);
	} else {
		const data = chirpStore.GetChirps();
		const chirps = Object.keys(data).map(key => {
			return {
				id : key,
				username: data[key].username,
				chirp: data[key].chirp
			}
		});
		res.json(chirps);
	}
});


router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.json('Cheeped!');
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