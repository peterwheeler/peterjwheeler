// --------------------------------- //
// All requirements for running gulp //
// --------------------------------- //

var gulp        = require('gulp');
var	gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var babel = require('gulp-babel');
// var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack-stream');

var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
// var imagemin = require('gulp-imagemin');
var historyApiFallback = require('connect-history-api-fallback');
var path = require('path');

// --------------------------------- //
// Error handler for running gulp //
// --------------------------------- //

var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit("end");
};

// --------------------------- //
// Tasks to do before building //
// --------------------------- //

// Copy react.js and react-dom.js to assets/js/src/vendor
// only if the copy in node_modules is "newer"
// gulp.task('copy-react', function() {
//   return gulp.src('node_modules/react/dist/react.js')
//     // .pipe(newer('assets/js/src/vendor/react.js'))
//     .pipe(gulp.dest('build/js/react/'));
// });
// gulp.task('copy-react-dom', function() {
//   return gulp.src('node_modules/react-dom/dist/react-dom.js')
//     // .pipe(newer('assets/js/src/vendor/react-dom.js'))
//     .pipe(gulp.dest('build/js/react/'));
// });

// ------------------------------------ //
// Main tasks to do during the build //
// ------------------------------------ //

gulp.task('sass-task', function() {
    var s = sass({});
    s.on('error',function(e){
      gutil.log(e);
      s.end();
    });
    return gulp.src("./build/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./build/css"))
        .pipe(browserSync.stream());
});

gulp.task('es6-task', function(){
    return gulp.src("./build/js/app/main.js")
        .pipe(webpack({
            watch: true,
            entry: ["./build/js/app/main.js", "./build/js/threejs/svgCloud.js", "./build/js/text-bitmap/three-bmfont-text.js"],
            bail: true,
            // devtool: 'source-map',
            output: {
              filename: "bundle.js",
            },
            // entry: {
            //         './build/js/app/main': './build/js/app/main', // will be  ./build/application/bundle.js,
            //         'build/library/bundle': './src/library`'// will be  ./build/library/bundle.js
            //       },
            module: {
              loaders: [
                {
                  test: /\.js$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'babel-loader',
                  query: {
                    presets: ['es2015', 'react']
                  }
                },
                {
                  test: /\.(png|jpg|gif)$/,
                  loader: 'url-loader',
                  options: {
                    name: '../images/img-[hash:6].[ext]',
                    limit: 350000
                  }
                },
                {
                  test: /\.(png|jpg|gif)$/,
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[hash:6].[ext]',
                    limit: 350000
                  }
                },
              ]
            }
        }))
        .on('error', function(err) {
            console.error('JSX ERROR in ' + err.fileName);
            console.error(err.message);
            this.end();
          })
        .pipe(gulp.dest("./build/js"))
        .pipe(browserSync.stream());
});

// --------------------------------- //
// Misc tasks to do at the end of build //
// --------------------------------- //

gulp.task('useref', function(){
  return gulp.src("build/index.html")
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf("*.js", uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(gulp.dest("dist"));
});

gulp.task('css', function() {
	return gulp.src("build/css/**/*")
		.pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task('images', function(){
	return gulp.src("build/images/**/*.+(png|jpg|gif|svg)")
		.pipe(imagemin())
		.pipe(gulp.dest("dist/images"));
});

// --------------------- //
// Serve and watch build //
// --------------------- //

gulp.task('serve', function(){
	browserSync.init({
        server:{
            baseDir: ["./", "./build"]
        },
        port: 4000,
        browser: "C://Users//pw8g08//AppData//Local//Google//Chrome SxS//Application//chrome.exe",
        // open: false,
        middleware: [historyApiFallback()]
    });
});

gulp.task('watch', function() {
    gulp.watch("./build/sass/**/*.scss", ['sass-task'], browserSync.reload);
    // gulp.watch("./build/js/**/*.js", browserSync.reload);
    gulp.watch("./build/js/bundle.js").on('change', browserSync.reload);
    gulp.watch("./build/index.html").on('change', browserSync.reload);
});

// -------------------------- //
// Run gulp with default task //
// -------------------------- //

gulp.task('default', ['sass-task', 'es6-task', 'css', 'serve', 'watch']);

gulp.task('build', ['default', 'useref', 'images']);