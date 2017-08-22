const gulp = require('gulp');
const sass = require('gulp-sass');
const inject = require('gulp-inject');
const concat = require('gulp-concat');
const rev = require('gulp-rev');
const autoprefixer = require('gulp-autoprefixer');

// DEVELOPMENT
gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('inject', () => {
  return gulp.src('./src/index.html')
  .pipe(inject(gulp.src('./src/assets/css/**/*.css', {read: false}), {relative: true}))
  .pipe(gulp.dest('./src'));
});

gulp.task('default', ['sass', 'inject'], () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/assets/css/**/*.css', ['inject']);
});

// PRODUCTION
gulp.task('sass:production', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(concat('style.css'))
    .pipe(rev())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('inject:production', () => {
  return gulp.src('./dist/index.html')
  .pipe(inject(gulp.src('./dist/css/*.css', {read: false}), {relative: true}))
  .pipe(gulp.dest('./dist'));
});

// Run this one if you want to copy files from ./public to ./dist (or vice-versa)
gulp.task('copy-public', () => {
  return gulp.src('public/*')
  // Add image optimizations if you want
  .pipe(gulp.dest('./dist'))
})
