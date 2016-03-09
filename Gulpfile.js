var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');

gulp.task('styles', function() {
    gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.scss', ['styles']);
});

gulp.task('scripts', function() {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject
        .src('app/**/*.ts')
        .pipe(ts(tsProject));
    return tsResult;
});

gulp.task('default', ['scripts', 'styles', 'watch']);