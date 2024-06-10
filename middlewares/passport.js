const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const Admin = require("../models/admin.model");
const { jwtSecret } = require("../configs/server");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// User JWT Strategy
const userJWTStrategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
  },
  (jwtPayload, done) => {
    User.findOne({
      _id: jwtPayload.user._id,
      jwtUpdated: jwtPayload.user.jwtUpdated,
    })
      .then((user) => {
        if (!user) return done("Account accessed from a different device.");
        if (user.accountDeleted)
          return done("Your account has been deleted. Please contact us.");
        return done(null, user);
      })
      .catch((err) => done(err));
  }
);

// User Local Strategy
const userLocalStrategy = new LocalStrategy((username, password, done) => {
  const criteria = username.includes('@') ? { email: username } : { username: username };
  User.findOne(criteria, "accountDeleted password", (err, user) => {
    if (err) return done(err);
    if (!user || user.accountDeleted) return done(null, false, { message: "Incorrect username or account deleted." });
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) return done(null, false, { message: "Incorrect password." });
      return done(null, user);
    });
  });
});

// Admin JWT Strategy
const adminJWTStrategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
  },
  (jwtPayload, done) => {
    if (jwtPayload.user.role !== "admin") return done("Unauthorized access.");
    Admin.findOne({ _id: jwtPayload.user._id })
      .then((admin) => {
        if (!admin) return done("Admin not found.");
        return done(null, admin);
      })
      .catch((err) => done(err));
  }
);

// Admin Local Strategy
const adminLocalStrategy = new LocalStrategy((username, password, done) => {
  const criteria = username.includes('@') ? { email: username } : { username: username };
  Admin.findOne(criteria, "password", (err, admin) => {
    if (err) return done(err);
    if (!admin) return done(null, false, { message: "Incorrect username." });
    bcrypt.compare(password, admin.password, (err, result) => {
      if (err || !result) return done(null, false, { message: "Incorrect password." });
      return done(null, admin);
    });
  });
});

module.exports = {
  adminLocalStrategy,
  adminJWTStrategy,
  userJWTStrategy,
  userLocalStrategy,
};
