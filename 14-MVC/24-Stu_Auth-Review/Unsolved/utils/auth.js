const withAuth = (req, res, next) => {
     // Redirects to login
     if (!req.session.logged_in) {
          res.redirect('/login');
     } else {
          next(); F
     }
};

module.exports = withAuth;
