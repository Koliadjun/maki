var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    server = require('gulp-server-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    plumberNotifier = require('gulp-plumber-notifier');
  
gulp.task('imgCopy', function(){
  gulp.src('./dev/img/*')
  .pipe(gulp.dest('./app/img/'))
  gulp.src('./dev/icons/*')
  .pipe(gulp.dest('./app/icons/'))
})
gulp.task('jsCopy', function(){
  gulp.src('./dev/js/*')
  .pipe(gulp.dest('./app/js/'))
})

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('html', function(){
  gulp.src('./dev/*.pug')
  .pipe(plumberNotifier())
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./app/'))
});


gulp.task('css', function () {
   gulp.src('./dev/scss/*.scss')
   .pipe(plumberNotifier())
   .pipe(sass())
   .pipe(autoprefixer({
      browsers: ['last 30 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./app/css'));
});


gulp.task('watch',function(){
  gulp.watch(['./dev/*.pug','./dev/chunks/*.pug'], ['html'])
  gulp.watch('./dev/scss/*.scss',['css'])
  gulp.watch('./dev/js/*.js',['jsCopy'])
})


gulp.task('default',['html','watch','css','jsCopy','webserver'])