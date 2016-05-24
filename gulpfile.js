var gulp = require('gulp'),
    sass = require('gulp-sass'),
    batch = require('gulp-batch'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src(['sass/*.scss', 'sass/*.sass'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.task('serve', ['sass'],function(){

    browserSync.init({
        server: './'
    });

    gulp.watch(['sass/*.sass', 'sass/*.scss'], ['sass']);
    //gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch(['*.html', 'img/*.gif', 'img/*.png', 'img/*.jpg']).on('change', browserSync.reload);
});