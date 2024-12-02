
const isLogin = async (req, res, next) => {
  if (req.session.isLoggedIn && req.session.token) {
   
     next();
  } else {
    res.redirect('/');
  }
};

module.exports ={isLogin}