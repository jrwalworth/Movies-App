const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:[true, "Movie title is required!"],
            maxlength: [40, "Title cannot exceed 40 characters."],
            unique: true,
        },
        genre: {
            type: String,
            required: [true, "Movie genre is required!"],
            enum: [
                "Comedy",
                "Drama",
                "Horror",
                "Sci-Fi",
                "Fantasy",
                "Action",
                "Family",
                "Animated"
            ],
        },
        boxArt: {
            type: String,
            required:[true, "Movie picture is required!"],
        },
        watchLength: {
            type: String,
            default:"N/A",
        },
        rating: {
            type: String,
            enum: ["G", "PG", "PG-13", "R", "NC-17", "X"],
            required: [true, "Rating is required for movie!"],
        },
        actors: {
            type: [String],
        },
        isKidFriendly: {
            type: Boolean,
            default: false,
        },
        releaseYear: {
            type: Number,
            min: [1920, "Age is too old."]
        }
    },
    {
        timestamps: true,
    },
);

const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie;