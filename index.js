//Import Express
let express = require('express')
//Import routes
let apiRoutes = require("./routes")

//Start App
let app = express();
//Assign port
var port = process.env.PORT || 8080;
//Use API routes in the App
app.use('/api', apiRoutes)
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function() {
    console.log("Running CRUD express-mongo on Port "+ port);
})


