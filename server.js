var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));



var server = app.listen(5000, function () {
	var port = server.address().port;

	console.log('Server up and running on port ' + port);
});


app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/OHL.html');
});