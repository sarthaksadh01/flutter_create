
const express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
var port = process.env.PORT || 3000;



const imageSearch = require('image-search-google');
const client = new imageSearch('016824608548564037114:8y_-vdnkbdq', 'AIzaSyAfylhiQoGE_vaETYB8yOzGzfTsul-y1Ac');
const options = {page:1};


app.get('/', (req, res, next) => {


   res.send('working');

});

app.get('/api/search/:id', function (req, res) {
     var id = req.params.id;
 
   
    client.search(id, options)
    .then(images => {
 res.send(images[0].url);
        
    })
    .catch(error => console.log(error));

   
  
});


    app.listen(port);