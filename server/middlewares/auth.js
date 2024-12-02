const users         = require('../models/User');
const jwt 			 = require('jsonwebtoken');
const express        = require('express');
var session          = require('express-session');
const SECRET_KEY     = 'ABCDEF';
const authMiddleware = async (req,res,next) => {
	 const token = req.cookies.token;

  if (token) {
    jwt.verify(token, env.process.SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.redirect('/');
  }


};

module.exports = {authMiddleware};