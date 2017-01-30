const express = require('express');
const app = express();

// app.get('/', function (req, res) { // '/' is pathname, in this case relative
// 	console.log("get works");
	
// });

app.use('/', express.static('static'));

app.listen(3000, function () { // function() is a callback here, 
  console.log('Example app listening on port 3000!');
});
