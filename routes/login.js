// auth

exports.popover = function(req, res) {
  console.log('Popover. mySession: ', req.session);
  res.render('auth/index_pop', req.viewVars);
}


exports.login = function(req, res) {
  console.log('Popover. mySession: ', req.session);
  res.render('auth/index_pop', req.viewVars);
}


exports.signup = function(req, res) {
  console.log('Popover. mySession: ', req.session);
  res.render('auth/index_pop', req.viewVars);
}