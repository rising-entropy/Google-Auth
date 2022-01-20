const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = '1089758193915-9gjd53dvstmlod7314apbq60qevl4euo.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback: true
  },
  function(accessToken, refreshToken, profile, cb) {
    return profile;
  }
));