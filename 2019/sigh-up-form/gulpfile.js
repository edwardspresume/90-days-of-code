/* ==========================================================================
                                 Packages
   ========================================================================== */


const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();


/* ==========================================================================
                                 Package Options
   ========================================================================== */

const options = {
  htmlmin: {
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
    removeComments: true,
    collapseWhitespace: true,
    // removeEmptyElements: true,
    // removeEmptyAttributes: true,
    removeRedundantAttributes: true
  },

  cleanCSS: {
    level: 2
  },

  imagemin: {
    optimizationLevel: 5
  },

  sourcemapsInit: {
    largeFile: true
  },

  sourcemapsWrite: {
    addComment: false
  }
};

/* ==========================================================================
                                File Paths
   ========================================================================== */

const paths = {
  html: {
    src: "src/*.html",
    dest: "build",
    files: "build/*.html"
  },

  styles: {
    src: "src/scss/**/*.scss",
    dest: "build/css"
  },

  scripts: {
    src: "src/js/*.js",
    dest: "build/js"
  },

  img: {
    src: "src/img/*",
    dest: "build/img"
  },

  sourcemaps: {
    src: "../maps"
  }
};

/* ==========================================================================
                                 Tasks
   ========================================================================== */

// Copy and minify html files
const compileMarkup = () => {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin(options.htmlmin))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
};

// Compile sass file to a minimized css file
const compileStyle = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS(options.cleanCSS))
    .pipe(rename("main.min.css"))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
};

// Concat minify css files
const compileScript = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
};

// Concat and minify js files
const compileImg = () => {
  return gulp
    .src(paths.img.src, {
      since: gulp.lastRun(compileImg)
    })
    .pipe(imagemin(options.imagemin))
    .pipe(gulp.dest(paths.img.dest))
    .pipe(browserSync.stream());
};

// BrowserSync
function startServer() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
}

// File watcher
const watchFiles = () => {
  gulp.watch(paths.html.src, compileMarkup);
  gulp.watch(paths.styles.src, compileStyle);
  gulp.watch(paths.scripts.src, compileScript);
  gulp.watch(paths.img.src, compileImg);
  gulp.watch(paths.html.files).on("change", browserSync.reload);
};

const compile = gulp.parallel(
  compileMarkup,
  compileStyle,
  compileScript,
  compileImg
);

const serve = gulp.series(compile, startServer);

const run = gulp.parallel(serve, watchFiles);

gulp.task("default", run);