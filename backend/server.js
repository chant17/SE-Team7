const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
//ROUTES VARIABLE
const session = require('express-session');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser());
app.use(session({
  name: 'cookie',
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 4,
    sameSite: true,

  }
}));

app.use(function(req, res, next) {
  res.locals.loggedin = req.session.loggedin;
  res.locals.username = req.session.username;
  res.locals.adminLogin = req.session.adminLogin;
  next();
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const rolesRouter = require('./routes/role');
const usersRouter = require('./routes/users');

app.use('/roles', rolesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
