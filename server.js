var path = require('path');
var express= require('express');
app=express();
// import the ODM mongoose in global
mongoose=require('mongoose');
mongoose.Promise=require('bluebird');
// packge imported
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs  = require('express-handlebars');


//============================================
        /* Let's the game begin */
//============================================

// assets in the public folder
app.use('/static', express.static('public'));
// connexion too database
mongoose.connect('mongodb://localhost:27017/start');
//body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
// set engine handlebars
app.engine('handlebars', exphbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');
// require Routes
require("./routing/routes");

//server connecting
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Hi ! the server is running on port "+port);
})
/* promise mongoose
mongoosePromise=promise.promisifyAll(require('mongoose'));
*/
