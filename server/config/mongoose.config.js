const mongoose = require('mongoose');
const movieDB = 'movieDB';

mongoose.connect(`mongodb://localhost/${movieDB}`, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => {
    console.log(`Connected to MongoDB ${movieDB}`);
}).catch((err) => {
    console.log('DB Connection Error', err);
});