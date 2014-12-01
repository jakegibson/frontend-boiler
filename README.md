## Go to [generator-frontend-boiler](https://github.com/jakegibson/generator-frontend-boiler) repo, this one will no longer be updated


#### Modular frontend boiler leveraging browserify and angular to cleanly group by concern


#####To use:
    npm install -g generator-frontend-boiler
    yo frontend-boiler [mySite]
    cd mySite
    gulp
    localhost:1338

#####To create another module in components:
    cd mySite
    yo frontend-boiler:mod [modName]
    
    
####Structure    
    index.jade  #bootstrap angular
    assets/ #images, sass, etc
    app/  #angular
    --common/  # modules likely to be reused across many
    --components/ # modules based on concern
      |
       --home/ 
         |
         --index.coffee # bootstraps
         --controllers.coffee # all controllers for this module go here
         --services.coffee
         --factories.coffee
         --directives.coffee
         

A component's index.coffee contains:

    app = angular.module('home', [])

    require('./controllers')(app)
    require('./directives')(app)
    #require('./services')(app)
    #require('./factories')(app)
    
    module.exports = app

A controllers.coffee file would look like:

    module.exports = (app)->
      app.controller('homeCtrl', ($scope)->
    
      )
      .controller('anotherCtrl', ($scope, someService) ->
        #do stuff
      )

An example of requiring a compnonent in our app (app.coffee):

    home = require('./components/home')
    routes = require('./routes')
    
    angular.module('simple',['ngRoute', home.name])
    .config(routes)

In the above example `home` is a component's folder name.  How clean is that!


#####Notes:
1. Our gulp file minifies/concatenates our coffee files, but thanks to gulp-ng-annotate you don't have to worry about using the array of string includes, typically required.  Instead of  `.controller('anotherCtrl',['$scope','someService', ($scope, someService) ->`  we only need `.controller('anotherCtrl', ($scope, someService) ->`
2. Livereload is setup so no reloading/refreshing 




### ToDo
Sourcemaps  
Option for vanilla JS  
Option for vanilla HTML  
option for less instead of sass  
 
 
