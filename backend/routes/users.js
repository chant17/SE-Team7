const router = require("express").Router();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcryptjs = require("bcrypt");
const {validationResult} = require("express-validator");
const path = require("path");
const axios = require("axios");


let User = require("../models/user.model");
router.use(cookieParser());


router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/add").post((req, res) => {
router.post("/add", async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
      return res.status(401).json({ errors: errors.array() });
    }

    let user = await User.findOne({ username });

    if (user) {
      return res.status(401).json({ msg: "Username is taken!" });
    }

    const salt = await bcryptjs.genSalt(10);
    password = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      password,
    });

    await newUser
      .save()
      .then(() => res.json("User added!"))
      .catch((err) => res.status(400).json("Error: " + err));

  } catch (error) {
    console.log("Here " + error.message);
    return res.status(500).json({ msg: "There's a server error!" });
  }
});

router.post('/', async (req, res) => {
  try{

    const { username, password} = req.body;
    const errors = validationResult(req); //THIS IS NOT DEFINED
    let user = await User.findOne({ username });

    if(!errors.isEmpty()){
      console.log("Empty!!");
      return res.status(401).json({ errors: errors.array() });
    }

    if(!user){
      console.log("No user with this username! " + error.message);
      return res.status(401).json({ msg: "No user with this username!" });
    }

    let passCheck = await bcryptjs.compare(password, user.password);

    if(passCheck){
      req.session.loggedin = true;
      req.session.username = username;
      return res.status(200).json({
        success: true,
        redirectUrl: '/adminLogin'
      })  
     
    }
    else{
      console.log("Wrong password");
      res.status(401).json({ msg: "Password doesn't match" })
    }

  }
  catch (error){
    console.log(error.message);
    return res.status(500).json({ msg: "There's a server error!"});
  }

})


router.get("/logout", (req, res, next)=>{
  try{
  req.session.destroy();
  res.clearCookie('cookie');
  res.redirect('/');
  } catch(e){
    console.log(e);
    res.sendStatus(500);
    res.end();
  }
});

module.exports = router;
