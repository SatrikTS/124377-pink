"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var run = require("run-sequence");

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

/*ТУТ НАЧАЛО*/
gulp.task("fonts", function () {
  gulp.src("fonts/*.{woof, woof2}")
  .pipe(plumber())
  .pipe(gulp.dest("fonts"))
})

gulp.task("images", function () {
  gulp.src("img/*.{png,jpg}")
  pipe(imagemin[
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true})
  ])
  .pipe(gulp.dest("img"));
})

gulp.task("html", function () {
  gulp.src("*/*.html")
  .pipe(plumber())
  .pipe(gulp.dest("*/"))
})

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

gulp.task("build", function(fn){
  run("style", "fonts", "images", "html", fn)
})

gulp.task("copy", function(){
  return gulp.src([
    "style/**/*.{woof,woof2}",
    "img/**",
    "js/**",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
