exports = module.exports;

var passport = require('passport');


//exports.login = function() {
exports.login = passport.authenticate('local', {
  successRedirect: '/auth/login/success',
  failureRedirect: '/auth/login/failure'
});


//exports.logout = function() {
exports.logout = function(req, res) {
  req.logout();
  res.end();
}


exports.loginSuccess = function() {
  res.json({
    success: true,
    user: req.session.passport.user
  });
}


exports.loginFailure = function(req, res) {
  res.json({
    success: false,
    message: 'Invalid username or password'
  });
}
