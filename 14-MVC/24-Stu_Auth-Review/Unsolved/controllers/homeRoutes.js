const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth'); //Require  authorization validation middleware

// Get endpoint with authorization validation middleware
router.get('/', withAuth, async (req, res) => {
     try {
          const userData = await User.findAll({
               attributes: { exclude: ['password'] },
               order: [['name', 'ASC']],
          });

          const users = userData.map((project) => project.get({ plain: true }));

          res.render('homepage', {
               users,
               // Opens homepage with users model and authorization session
               logged_in: req.session.logged_in,
          });
     } catch (err) {
          res.status(500).json(err);
     }
});

router.get('/login', (req, res) => {
     // Validates user is logged in
     if (req.session.logged_in) {
          res.redirect('/');
          return;
     }

     res.render('login');
});

module.exports = router;
