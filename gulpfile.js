var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    uglify      = require('gulp-uglify'),
    jade        = require('gulp-jade'),
    coffeeify    = require('gulp-coffeeify'),
    concat      = require('gulp-concat'),
    livereload  = require('gulp-livereload'),
    tinylr      = require('tiny-lr'),
    express     = require('express'),
    app         = express(),
    marked      = require('marked'), // For :markdown filter in jade
    path        = require('path'),
    server      = tinylr();
 
 
// --- Basic Tasks ---
/*
gulp.task('css', function() {
  return gulp.src('src/assets/stylesheets/*.styl')
    .pipe( stylus({ set: ['compress']} ) )
    .pipe( gulp.dest('dist/assets/stylesheets/') )
    .pipe( livereload( server ) );
 
});
*/ 
gulp.task('coffee', function() {
  return gulp.src('src/**/*.coffee')
    .pipe( coffeeify() ) 
//    .pipe( uglify() )
//    .pipe( concat('all.min.js'))
    .pipe( gulp.dest('dist/'))
    .pipe( livereload( server ) );
});
 
gulp.task('templates', function() {
  return gulp.src('src/**/*.jade')
    .pipe( jade({ pretty: true }))
    .pipe( gulp.dest('dist/'))
    .pipe( livereload( server ));
});
 
gulp.task('express', function() {
  app.use(require('connect-livereload')());
  app.use(express.static(path.resolve('./dist')));
  app.listen(1337);
  gutil.log('Listening on port: 1337');
});
 
gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) return console.log(err);
  });
//  gulp.watch('src/assets/stylesheets/*.styl',['css']);
 
//  gulp.watch('src/assets/js/*.js',['js']);
 
  gulp.watch('./src/**/*.jade',['templates']);
      
});
 
// Default Task
gulp.task('default', ['coffee','templates','express','watch']);
