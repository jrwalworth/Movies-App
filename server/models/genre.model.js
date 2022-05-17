const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:[true, "Movie genre is required!"],
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
    },
    {
        timestamps: true,
    },
);

const Genre = mongoose.model('Genre', GenreSchema)
module.exports = Genre;