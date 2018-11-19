const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('message', () => console.log('Gulp is running'));

gulp.task('copyHtml', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('cssmin', function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('jsmin', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('imagemin', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
});

gulp.task('server', ['copyHtml', 'sass', 'cssmin', 'jsmin', 'imagemin'], function () {

    browserSync.init({
        server: './dist'
    });

    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/css/*.css', ['cssmin']);
    gulp.watch('src/js/*.js', ['jsmin']);
    gulp.watch('src/img/*', ['imagemin']);
    gulp.watch("dist/*.html").on("change", browserSync.reload);
});

gulp.task("default", ["message", "server"]);