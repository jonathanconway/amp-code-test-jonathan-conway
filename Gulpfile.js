var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);