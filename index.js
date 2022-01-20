const express = require('express');
const passport = require('passport');
require('./auth');
const app = express();
const port = 3000;

const isLoggedIn = (req, res, next)=>{
    req.user ? next() : res.sendStatus(401);
}

app.get('/', (req, res)=>{
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/logged-in', isLoggedIn, (req, res)=>{
    res.send(`You have successfully Logged In`);
});

app.get('/failed-login', (req, res)=>{
    res.send(`Invalid Login`);
});

app.get('/auth/google', 
    passport.authenticate('google', {scope: ['email', 'profile']})
);

app.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/logged-in',
    failureRedirect: '/failed-login'
}))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});