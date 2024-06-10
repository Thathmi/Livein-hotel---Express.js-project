const passport = require("passport");
const {
  adminLocalStrategy,
  adminJWTStrategy,
  userJWTStrategy,
  userLocalStrategy,
} = require("./passport.middleware");

passport.use("admin", adminLocalStrategy);
passport.use("user", userLocalStrategy);
passport.use("adminJwt", adminJWTStrategy);
passport.use("userJwt", userJWTStrategy);

const adminCredentialCheck = (req, res, next) => {
  passport.authenticate("admin", { session: false }, (error, admin, info) => {
    if (error || !admin) {
      return res.status(400).json({ message: info?.message || "Login failed." });
    }
    req.login(admin, { session: false }, (error) => {
      if (error) {
        return res.status(400).json({ message: "Login error. Please try again." });
      }
      next();
    });
  })(req, res, next);
};

const userCredentialCheck = (req, res, next) => {
  passport.authenticate("user", { session: false }, (error, user, info) => {
    if (error || !user) {
      return res.status(400).json({ message: info?.message || "Login failed." });
    }
    req.login(user, { session: false }, (error) => {
      if (error) {
        return res.status(400).json({ message: "Login error. Please try again." });
      }
      next();
    });
  })(req, res, next);
};

const userAuthentication = passport.authenticate("userJwt", { session: false });
const adminAuthentication = passport.authenticate("adminJwt", { session: false });

module.exports = {
  adminCredentialCheck,
  userCredentialCheck,
  adminAuthentication,
  userAuthentication,
};
