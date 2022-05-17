const Movie = require("../models/movie.model");

module.exports = {
    getMovies: (req, res) => {
        Movie.find({}).then(allMovies => {
            res.json(allMovies);
        }).catch((err) => {
            res.status(400).json({message: "Something went wrong in findAll ", error: err});
        });
    },
    createMovie: (req, res) => {
        Movie.create(req.body).then(newMovie => {
            res.status(201).json(newMovie);
        }).catch((err) => {
            res.status(400).json({message: "Something when wrong in create ", error: err});
        });
    },
    getMovieById: (req, res) => {
        Movie.findOne({_id: req.params.id})
        .then((movie) => {
            res.json(movie);
        }).catch((err) => {
            res.status(400).json({message: "Something when wrong in findById ", error: err});
        });
    },
    deleteMovie: (req, res) => {
        Movie.deleteOne({_id: req.params.id}).then((movie) => {
            res.json(movie);
        }).catch((err) => {
            res.status(400).json({message: "Something when wrong with delete ", error: err});
        });
    },
    //rewrite based on video.
    updateMovie: (req, res) => {
        Movie.updateOne({_id: req.params.id}).then((movie) => {
            res.json(movie);
        }).catch((err) => {
            res.status(400).json({message: "Something when wrong with update ", error: err});
        });
    },
};