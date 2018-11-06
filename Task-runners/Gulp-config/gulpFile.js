const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {

    return gulp.src('build/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('css', ['sass'], function () {
    return gulp.src([
            'src/css/style.css',
            'build/css/test.css'
        ])
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src('build/js/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
});

gulp.task('img', function () {
    return gulp.src('build/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/img'))
        .pipe(browserSync.stream());
});

gulp.task('server', ['css'], function () {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['build/css/*.css', 'build/scss/*.scss'], ['css']);
    gulp.watch(['build/js/*.js'], ['js'])
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['server', 'img']);