const Genre = require("../models/genre.model");

module.exports = {
    getGenres: (req, res) => {
        Genre.find({}).then(allGenres => {
            res.json(allGenres);
        }).catch((err) => {
            res.status(400).json({message: "Something went wrong in findAll ", error: err});
        });
    },
};