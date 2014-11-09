module.exports = ($routeProvider, $locationProvider) ->
  
  $routeProvider
    .when '/', 
      templateUrl: "app/components/home/homeView.html"
      controller: 'homeCtrl'
    .otherwise
      redirectTo: '/'

  $locationProvider.html5Mode(true)
