var express = require('express');
var session = require('express-session')
var parser = require('body-parser');
var router = require('./api/index')
var passport = require('passport')
var FaceBookStrategy = require('passport-facebook')
var FaceBookConfig = require('./config')
var cors = require('cors')
var path = require("path");
var port = process.env.PORT || 3000;
var app = express();

var Users = require('./models/users')

require('./database')
require('./seed')

app.use(cors())

app.use(express.static('build'))

app.use(session({
    secret: FaceBookConfig.secret,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use('facebook', new FaceBookStrategy({
clientID: FaceBookConfig.clientID,
clientSecret: FaceBookConfig.clientSecret,
callbackURL: 'http://localhost:3000/auth/facebook/callback',
profileFields: []
}, (accessToken, refreshToken, profile, done) => {
  var userData = [];
Users.findOne({'id': profile.id}, {'id': false}, function(err, user) {
    if (err) {
        return console.log(err)
    }
    if (!user) {
        Users.create({
            name: profile.displayName,
            id: profile.id,
            wishlist: [],
            cart: []
        }, function(err, user){
          user.id = null;
        return done(null, user)
        })
    }
    else if(user){
      return done(null, user)
    }
})
}))




passport.serializeUser((user, done) => {
    return done(null, user)
})
passport.deserializeUser((user, done) => {
    return done(null, user)
})

app.use(parser.json())
app.use('/api', router)

app.get('/', (req, res) => {
  console.log(__dirname)
})

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/'
    }), (req, res) => {
      res.status(200).send(req.user)
    });

app.listen(port, () => {
    console.log('App is listening on port: ' + port)
})
