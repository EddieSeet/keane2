var UserModel = require("../server/database").User;

//tutorial
const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, cb) {
      //this one is typically a DB call. Assume that the returned user object
      //is pre-formatted and ready for storing in JWT
      console.log("passport1");

      return UserModel.findAll({
        where: { email: email },
        defaults: { password: password }
      })
        .then(user => {
          //        console.log("logging user in passportjs")
          // console.log(user[0])

          //   console.log("not my prob");
          //     console.log(user[0]["password"]);

          if (user[0] == undefined) {
            console.log("!user");
            return cb(null, false, { message: "Incorrect email." });
          } else if (user[0]["password"] !== password) {
            return cb(null, false, { message: "Incorrect  password." });
          } else {
            return cb(null, user, { message: "Logged In Successfully" });
          }
        })
        .catch(err => cb(err));

      // return UserModel.findOne({email, password})
      //      .then(user => {
      //       //  console.log(user.toJSON())
      //          if (!user) {
      //              return cb(null, false, {message: 'Incorrect email or password.'});
      //          }
      //          return cb(null, user, {message: 'Logged In Successfully'});
      //     })
      //     .catch(err => cb(err));
    }
  )
);

const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret"
    },
    function(jwtPayload, cb) {
      return UserModel.findOne({
        where: { email: jwtPayload.email }
      })
        .then(user => {
          console.log("2nd passport");

          return cb(null, user);
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);

//serializeuser
// passport.serializeUser((user, cb) => {
// 	cb(null, user.email);
// });

// passport.deserializeUser((email, cb) => {
// 	models.user.findOne(email, (err, user) => {
// 		cb(err, user);

//   })
// })
