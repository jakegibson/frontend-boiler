(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  module.exports = function(home) {
    return home.controller('homeCtrl', function($scope) {
      return console.log('homeCtrl');
    });
  };

}).call(this);

},{}],2:[function(require,module,exports){
(function() {
  var home;

  home = angular.module('home', []);

  require('./homeCtrl')(home);

  module.exports = home;

}).call(this);

},{"./homeCtrl":1}],3:[function(require,module,exports){
(function() {
  var home, routes;

  home = require('./components/home');

  routes = require('./routes');

  angular.module('simple', ['ngRoute', home.name]).config(routes);

}).call(this);

},{"./components/home":2,"./routes":4}],4:[function(require,module,exports){
(function() {
  module.exports = function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: "app/components/home/homeView.html",
      controller: 'homeCtrl'
    }).otherwise({
      redirectTo: '/'
    });
    return $locationProvider.html5Mode(true);
  };

}).call(this);

},{}]},{},[3])