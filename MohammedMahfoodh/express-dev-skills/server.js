// Load the express module on our server
const express = require('express');

// Invoking express on our server
const app = express();

// Configuring port number
// Tell The Server Where To Listen For The Requests.
const port = 4002;

// insert your route handlers (app.get and so on) below this line!
const skillsRouter = require('./routes/skills');
const skillsModels = require('./models/skills');

// Mount Routes 
app.use('/', skillsRouter);
app.use('/', skillsModels);



// Listen To the Requests
app.listen(port, function(){
    console.log(`Hello-express is listening on port ${port}`);
})
