const express = require("express");
const app = express();

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
    res.render('card', {prompt: "who's buries in Grant's tomb?", colors});
    //another way to insert variables
    // res.locals.prompt = "who's buries in Grant's tomb?";  

});

app.listen(3000, () => {
    console.log("The application is running on localhost:3000!");
});