const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: "who's buried in Grant's tomb?", colors});
    //another way to insert variables
    // res.locals.prompt = "who's buries in Grant's tomb?";
});

app.get('/hello', (req, res) => {
    res.render('hello', {name: req.cookies.username});

});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});


app.listen(3000, () => {
    console.log("The application is running on localhost:3000!");
});