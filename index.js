const express = require('express')
const teamRoutes = require("./routes/team-routes")
const mongoose = require('mongoose');
const cors = require('cors')


// Initialize the app
let app = express();

app.use(cors());
app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse requests of content-type - application/json
// app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/leaderboard-db', { useNewUrlParser: true }).then(() => console.log("MongoDB connected...")).catch(() => console.log("not connected"));

//const db = mongoose.connection();



// Use Api routes in the App
app.use('/', teamRoutes)

//app.get("/", () => console.log("hi"));
// Setup server port
const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Running Student Management Api on port " + port);
});