requirejs.config({
//  enforceDefine: true,
  baseUrl: 'js/lib',
  paths: {
    jquery: 'jquery-2.0.3.min.js',
    jqueryMigrate: 'jquery-migrate.js',
    underscore: 'underscore-min.js',
    backbone: 'backbone-min.js'
//    socketio: '/socket.io/socket.io.js/'
  },

  shim: {
    "jquery": ['jquery'],
    jqueryMigrate: {
      deps: ['jquery']
    },
    underscore: {
      deps: [],
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
}); // requirejs.config


/*
grab errors
 */
requirejs.onError = function (err) {
  console.log(err.requireType);
  if (err.requireType === 'timeout') {
    console.log('modules: ' + err.requireModules);
  }

  throw err;
};


requirejs(['../andr/andrmain']);