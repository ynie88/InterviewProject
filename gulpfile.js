/**
 * Created by oys633 on 10/7/14.
 */
var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload:true,
    port:8005
  });
  gulp.start('watch');
});

gulp.task('watch', function() {
  gulp.watch(['./app/*.js','./index.html'], ['reload']);
});

gulp.task('reload',function(){
  gulp.src(['./app/*.js'])
    .pipe(connect.reload());
});