let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require("./routes");


let app = express();
var port = process.env.PORT || 8080;

// Welcome message in the root path
app.get('/', (req, res) => res.send('Welcome to Express'));

// Launch app to the specified port
app.listen(port, function() {
    console.log("Running mongo-express on Port "+ port);
});

//configure bodyparser to handle the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//connect to mongoose
const dbPath = 'mongodb://localhost/firstrest';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
});

//Use API routes in the App
app.use('/api', apiRoutes);