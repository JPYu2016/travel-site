/* no need to put ".js" extension */
require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');

/*
var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();
*/

/* no longer needed
gulp.task('default', function() {
    console.log("Hooray - you created a Gulp task.")
});

gulp.task('html', function(){
    console.log("Imagine something useful being done to your HTML here.")
});
*/
