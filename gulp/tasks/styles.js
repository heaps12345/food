var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
cssNext = require('postcss-cssNext'),
mixins = require('postcss-mixins'),
nested = require('postcss-nested'),
hexrgba = require('postcss-hexrgba'),
font = require('postcss-font-awesome'),
cssvars = require('postcss-simple-vars');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, font, cssNext]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
