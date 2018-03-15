var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
	res.render('index');
})

app.listen(3000, function(){
	console.log('running...');
})