router.get(../chirpsstore.js:id, function (req, res) {
   
    res.json(data); //send resource
});

router.post(../chirpsstore.js, function (req, res) {
    //save resource
    res.json(id); //or sendStatus(200)
});

router.put(../chirpsstore.js, function (req, res) {
    //update resource
    res.sendStatus(200);

});

router.delete(../chirpsstore.js:id, function (req, res) {
    //delete resource
    res.sendStatus(200);

});


module.exports = router;