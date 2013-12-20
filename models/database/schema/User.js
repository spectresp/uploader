// PASSPORT USER TEST

var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId,
    PassportLocalStrategy = require('passport-local').Strategy;
    Schema = mongoose.Schema;

var userSchema = new Schema({
  name:     {type:String, required:true, trim:true},
  email:    {type:String, required: true, trim: true, lowercase:true, unique: true},
  image:    {type:String},
  password: {type:String, required: true },
  created:  {type: Date, default: Date.now}
});


/*
Main login logic
*/
userSchema.statics.localStrategy = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},


// @see https://github.com/jaredhanson/passport-local
function(username, password, done) {
  console.log('User, userSchema');

  var User = require('./User')
  User.findOne({email: username}, function(err, user) {
    if(err) { return done(err); }
    if(!user) {
      return done(null, false, { message: 'User not found'});
    }
    if(!user.validPassword(password)) {
      return done(null, false, { message: 'Invalid Password'});
    }

    // specify fields that will be saved into users session
    return done(null, {
      id: user._id,
      name: user.name,
      image: user.image,
      email: user.email
    });
  }); // User
}); // function


// add crypt before saving new user
userSchema.pre('save', function(next) {
  var user = this;
  if(!user.isModified('password')) return next();


});


userSchema.methods.validPassword = function(password) {
  if(this.passwprd == password) {
    return true;
  }
  return false;
}

userSchema.statics.serializeUser = function(user, done) {
  done(null, user);
}

userSchema.statics.deserializeUser = function(user, done) {
  done(null, obj);
}

var model = mongoose.model('User', userSchema);

exports = module.exports = model;
