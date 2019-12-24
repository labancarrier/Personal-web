const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(3000, function() {
    console.log("listening on 3000")
});

app.post('/', function(req, res) {
    console.log(req.body.email);
    res.end('Success!!');
})
