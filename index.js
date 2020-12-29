let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
let apiRoutes = require('./api-routes');

let port = process.env.port || 3000;

app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
app.use('/api',apiRoutes);

app.get('/',(request,response) => response.send('Hello World!'));
app.listen(port,function() {
    console.log('Running resthub on Port ' + port);
});

mongoose.connect('mongodb://localhost/resthub',{
    urlNewUrlParser : true
});

let db = mongoose.connection;

if (!db) {
    console.log('Error connnecting mongodb');
} else {
    console.log('DB connected!');
}
