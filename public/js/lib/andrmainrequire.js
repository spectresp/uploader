requirejs.config({
//  enforceDefine: true,
  baseUrl: '/js',
  paths: {
    'lib': 'lib',
    // jquery doesn't want itself to be defined through the shim! maybe cant overwrite global jquery
    jquery:         [
      'lib/jquery-2.0.3.min',
      '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js'],
    jqueryMigrate:            'lib/jquery-migrate',
    jqueryValidate:           'lib/jquery-validate.min',
    underscore:               'lib/underscore-min',
    backbone:                 'lib/backbone-min',
    andrmain:                 'andr/andrmain',
    orientationmonitor:       'andr/orientationmonitor'
  },

  shim: {
    jqueryMigrate: {
      deps: []
    },
    jqueryValidate: {
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
    orientationmonitor: {
      deps: ['underscore', 'backbone']
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

define(["jquery", "underscore", "jqueryMigrate", "jqueryValidate", "backbone"], function($, jqm, jqv, _, Backbone) {
  console.log("andrmainrequire, require js files loaded");
});
