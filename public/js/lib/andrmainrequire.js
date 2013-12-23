requirejs.config({
  enforceDefine: true,
  baseUrl: 'js',
  paths: {
    'lib': 'lib/',
    jquery:         [
      'lib/jquery-2.0.3.min',
      '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js'],
    jqueryMigrate:  'lib/jquery-migrate',
    underscore:     'lib/underscore-min',
    backbone:       'lib/backbone-min',
    andrmain:       'andr/andrmain'
  },

  shim: {
    jqueryMigrate: {
      deps: []
    },
    underscore: {
      deps: [],
      exports: '_'
    },
    backbone: {
      deps: ['underscore'],
      exports: 'Backbone'
    },
    backbone: {
      deps: ['underscore', 'backbone'],
    }
  }
}); // requirejs.config


/*
grab errors
 */
requirejs.onError = function (err) {
  console.log("Require.js ERROR: " + err.requireType);
  if (err.requireType === 'timeout') {
    console.log('ERROR, modules: ' + err.requireModules);
  }
  throw err;
};


requirejs(['andr/andrmain']);

define(["jquery"], function($) {
  console.log($.fn);
});