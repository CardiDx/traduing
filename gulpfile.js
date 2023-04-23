const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
// const imagemin = require("gulp-imagemin");
// const webp = require("gulp-webp");

function browsersync() {
  browserSync.init({
    server: {
      proxy: "rentalcar.test",
    },
    notify: false,
    online: true,
  });
}

// function images() {
//   return src("img/**/*")
//     .pipe(
//       imagemin([
//         imagemin.gifsicle({ interlaced: true }),
//         imagemin.mozjpeg({ quality: 75, progressive: true }),
//         imagemin.optipng({ optimizationLevel: 5 }),
//         imagemin.svgo({
//           plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
//         }),
//       ])
//     )
//     .pipe(webp())
//     .pipe(dest("img"));
// }

function scripts() {
  return src([
    "node_modules/jquery/dist/jquery.js",
    "node_modules/magnific-popup/dist/jquery.magnific-popup.js",
    // "node_modules/swiper/swiper-bundle.js",
    // "node_modules/aos/dist/aos.js",
    "js/app.js",
  ])
    .pipe(concat("app.min.js"))
    .pipe(uglify())
    .pipe(dest("js"))
    .pipe(browserSync.stream());
}

function styles() {
  return src("scss/main.scss") // получим main.scss
    .pipe(sourcemaps.init()) // инициализируем sourcemap
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("main.min.css")) // scss -> css
    .pipe(
      autoprefixer({
        // добавим префиксы
        overrideBrowserslist: ["last 10 version"],
        grid: true,
      })
    )
    .pipe(dest("css"))
    .pipe(cleanCSS()) // минимизируем CSS
    .pipe(browserSync.reload({ stream: true })); // перезагрузим сервер
}

function watching() {
  watch("scss/**/*.scss", styles);
  watch("js/app.js", scripts);
  watch(["*.html"]).on("change", browserSync.reload);
}

// exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

// exports.default = parallel(styles, scripts, browsersync, watching, images);
exports.default = parallel(styles, scripts, browsersync, watching);
