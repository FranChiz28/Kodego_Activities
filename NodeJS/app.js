const express = require('express');

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

app.get('/home', (req, res) => {
    res.render('home', { title: 'Home'});
});

app.get('/menu', (req, res) => {
    res.render('menu', { title: 'Menu'});
});

app.get('/reservation', (req, res) => {
    res.render('reservation', { title: 'Reservation'});
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Log In'});
});

