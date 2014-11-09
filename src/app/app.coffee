home = require('./components/home')
routes = require('./routes')

angular.module('simple',['ngRoute', home.name])
.config(routes)
