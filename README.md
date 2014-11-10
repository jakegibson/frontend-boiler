frontend-boiler
===============

Angular, Zurb Foundation, Coffee, Sass, Jade, Browserify (gulp-coffeify), and Gulp (build and livereload)

Coffee, Sass, and Jade files are watched to enable livereload on save.  Angular structure is similar to:
http://scotch.io/tutorials/javascript/angularjs-best-practices-directory-structure#a-better-structure-and-foundation
With a few small changes.  Most notable being how the index.coffee file is used in each component.  This file creates the angular module for the component, requires any controllers, services, etc and exports the module.

###Install
clone  
cd frontend-boiler  
npm install  
gulp  
go to localhost:1338  
edit files, see autoreload in action

Credits:
Livereload portion of gulpfile https://gist.github.com/yhsiang/8664407
Some angular structure concepts http://scotch.io/tutorials/javascript/angularjs-best-practices-directory-structure#a-better-structure-and-foundation
