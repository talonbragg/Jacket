module.exports = jacketConfig;

function jacketConfig() {
  function gzip(file, dest, new) {
    var fs = require("fs");
    var gulp = require('gulp');
    var zlib = require('zlib');

      // Zip The file
      fs.createReadStream('./dist/citron.min.js')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream())
        .pipe(gulp.dest(dest));

      console.log("File has been jacketed!");
  }
}
