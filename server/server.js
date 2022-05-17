const express = require('express');
const cors = require('cors');
require('./config/mongoose.config');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//keeps app open to www
// app.use(cors());

//whitelist cors for only localhost 
app.use(cors({
    origin:"http://localhost:3000" // would be server ip address when deployed.
}),
);

//always add this after the middleware app.use methods
require('./routes/movie.routes')(app);
// require('./routes/genre.routes')(app);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})