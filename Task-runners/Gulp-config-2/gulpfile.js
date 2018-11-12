const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

// Logs message
gulp.task("message", () => console.log("Gulp is running..."));

// Copy all html files
gulp.task("copyHtml", function() {
  return gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

// Compile sass to css
gulp.task("sass", function() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Concat minify css files
gulp.task("cssmin", function() {
  return gulp
    .src("src/css/*.css")
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Concat and minify js files
gulp.task("scripts", function() {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

// Optimize images
gulp.task("imagemin", function() {
  return gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
    .pipe(browserSync.stream());
});

// Create server and watch files
gulp.task(
  "server",
  ["copyHtml", "sass", "cssmin", "scripts", "imagemin"],
  function() {
    browserSync.init({
      server: "./dist"
    });

    gulp.watch("src/*.html", ["copyHtml"]);
    // Watch scss files in src
    gulp.watch("src/scss/*.scss", ["sass"]);
    // Watch css files in src
    gulp.watch("src/css/*.css", ["cssmin"]);
    // Watch js files in src
    gulp.watch("src/js/*.js", ["scripts"]);
    // Watch image files in src
    gulp.watch("src/images/*", ["imagemin"]);
    gulp.watch("dist/*.html").on("change", browserSync.reload);
  }
);

gulp.task("default", ["message", "server"]);
