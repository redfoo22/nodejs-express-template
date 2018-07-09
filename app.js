var express = require('express');
var app = express();

//first route
app.get('/', function (req, res) {
        res.send('Hello Mr. Foo! Now we have nodemon...yay....whooo!');
    });


 //listen to port 8080
 app.listen(8080, function () {
   console.log('foobotImageCompressor is listening on port 8080!');
 });
