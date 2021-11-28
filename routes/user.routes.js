const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if(!req.user){
    res.redirect('/user/no-permission');
  } else {
    next();
  }
};

router.get('/logged', isLogged, (req, res) => {
  const name = req.user.displayName;
  const photo = req.user.photos[0].value;
  res.render('logged', {name: name, photo: photo});
});

router.get('/profile/settings', isLogged, (req,res) => {
  res.render('profile/settings');
});

router.get('/profile', isLogged, (req,res) => {
  res.render('profile/profile');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;