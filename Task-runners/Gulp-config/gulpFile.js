const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

gulp.task("sass", function() {
  return gulp
    .src("build/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.stream());
});

gulp.task("concat-min-css", function() {
  return gulp
    .src("build/css/*.css")
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("concat-min-js", function() {
  return gulp
    .src("build/js/*.js")
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

gulp.task("imagemin", function() {
  return gulp
    .src("build/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("src/assets/img"));
});

gulp.task("server", ["sass", "concat-min-css", "concat-min-js"], function() {
  browserSync.init({
    server: "./src"
  });

  // Watch scss files in build
  gulp.watch("build/scss/*.scss", ["sass"]);

  // Watch css files in build
  gulp.watch("build/css/*.css", ["concat-min-css"]);

  // Watch js files in build
  gulp.watch("build/js/*.js", ["concat-min-js"]);
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("default", ["server", "imagemin"]);
