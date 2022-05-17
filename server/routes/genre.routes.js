const GenreController = require('../controllers/genre.controller');

module.exports = (app) => {
    app.get('/api/genres', GenreController.getGenres);
};