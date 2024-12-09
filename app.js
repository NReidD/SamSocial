const express = require("express");
const app = express();
const path = require("path");
const ExpressError = require("./utils/ExpressError");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const homeRouter = require("./routers/home");
const postRouter = require("./routers/post");
const listingRouter = require("./routers/listing");
const orgRouter = require("./routers/orgs");
const userRouter = require("./routers/users");

mongoose.connect('mongodb+srv://castellanoandrew05:2kqMNvKnDklwlgdd@cluster0.02oll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('DB CONNECTED');
    })
    .catch(e => {
        console.log('DB CONNECTION ERROR');
        console.log(e);
    })

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

app.engine("ejs", ejsMate);

const sessionConfig = {
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxage: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", homeRouter);
app.use("/", postRouter);
app.use("/", listingRouter);
app.use("/", orgRouter);
app.use("/", userRouter);
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong!";
  res.status(statusCode).render("error", { err });
});

app.listen(3000, () => {
  console.log("SERVER IS LIVE");
});
