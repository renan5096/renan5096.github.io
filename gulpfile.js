"use strict";

// Load plugins
const gulp = require("gulp");
const concat = require('gulp-concat');
const sass =  require('gulp-sass')(require('sass'));
const uglify = require("gulp-uglify");
const babel = require('gulp-babel');

// CSS task
function css() {
  return gulp
    .src('./src/assets/**/*.sass')
    .pipe(sass({
      outputStyle: "compressed"
    }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./deploy'))
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp.src(['./src/assets/**/*.js'])
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(concat('styles.js'))
      .pipe(gulp.dest('./deploy'))
  );
}

// Watch files
function watchFiles() {
  gulp.watch('./src/assets/**/*.sass', css);
  gulp.watch('./src/assets/**/*.js', gulp.series(scripts));
}

// define complex tasks
const js = gulp.series(scripts);
const build = gulp.series(gulp.parallel(css, js));
const watch = gulp.parallel(watchFiles);

// export tasks
exports.css = css;
exports.js = js;
exports.watch = watch;
exports.default = build;
