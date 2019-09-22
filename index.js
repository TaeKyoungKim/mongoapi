let express = require('express');
let app = express();
let apiRoutes = require('./api-routes');
let bodyParser = require('body-parser');
let mongoose =require('mongoose');

var port = process.env.PORT || 8000;


app.use('/api' , apiRoutes);
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb+srv://root:1234@cluster0-tecvg.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true});
var db = mongoose.connection;

if(!db) {
    console.log("Error connecting db");
}
else console.log("DB connected successfully");

app.get('/', (req, res)=>{
    res.send('Hello World !!')
})


app.listen(port , ()=>{
    console.log(`Server is Strarting http://localhost:${port}`)
})