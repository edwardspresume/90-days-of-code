/* ==========================================================================
                                 Packages
   ========================================================================== */

const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync").create();

/* ==========================================================================
                                 File Path
   ========================================================================== */

const paths = {
  html: {
    src: "src/*.html",
    dest: "dist"
  },

  styles: {
    src: "src/scss/**/*.scss",
    dest: "dist/css"
  },

  scripts: {
    src: "src/js/*.js",
    dest: "dist/js"
  },

  images: {
    src: "src/images/*",
    dest: "dist/images"
  }
};

/* ==========================================================================
                                 Tasks
   ========================================================================== */

// Copy and minify html files
const compileMarkup = () => {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
};

// Compile sass file to a minimized css file
const compileStyle = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(
      rename({
        basename: "main",
        suffix: ".min"
      })
    )
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
};

// Optimize images
const compileImage = () => {
  return gulp
    .src(paths.images.src, {
      since: gulp.lastRun(compileImage)
    })
    .pipe(
      imagemin({
        optimizationLevel: 5
      })
    )
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream());
};

// BrowserSync
function startServer() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
}

const watchFiles = () => {
  gulp.watch(paths.html.src, compileMarkup);
  gulp.watch(paths.styles.src, compileStyle);
  gulp.watch(paths.images.src, compileImage);
  gulp.watch("dist/*.html").on("change", browserSync.reload);
};

const compile = gulp.parallel(compileMarkup, compileStyle, compileImage);

const serve = gulp.series(compile, startServer);

const run = gulp.parallel(serve, watchFiles);

gulp.task("default", run);
// exports.default = copyHTML