// --------------------------------- //
// All requirements for running gulp //
// --------------------------------- //

var gulp = require('gulp');
var	gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var webpack = require('webpack');
// var webpackStream = require('webpack-stream');
var environments = require('gulp-environments');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var historyApiFallback = require('connect-history-api-fallback');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var path = require('path');
var bundler;

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

// --------------------------------- //
// Config comes from https://words.mxbry.com/making-react-webpack-browsersync-gulp-play-nice-and-hot-reload-b2c1e01522e3#.n0sjx9w0f //
// --------------------------------- //

var webpackSettings = {
  entry: {
    app: [
        "webpack/hot/dev-server?reload",
        "webpack-hot-middleware/client",
        "react-hot-loader/patch",
        path.join(process.cwd(), "build/js/app/Main.jsx")
    ]
  },
  output: {
    path: path.join(process.cwd(), "build/js/"),
    filename: "bundle.js",
    publicPath: "/js/"
  },
  plugins: environments.production() ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    loaders: [{
        test: /\.(js|jsx)$/,
        include: path.join(process.cwd(), "build/js/"),
        exclude: /(node_modules|bower_components)/,
        loader: ['babel-loader?presets[]=react,presets[]=es2015', 'webpack-module-hot-accept']
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
      }
    ]
  }
}

gulp.task("webpack", function(callback) {
  bundler = webpack(webpackSettings);
});

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

// --------------------- //
// Serve and watch build //
// --------------------- //

gulp.task('dev', function(){
  browserSync.init({
    server: {
      baseDir: ["./", "./build"]
    },
    port: 4000,
    browser: "C://Users//pw8g08//AppData//Local//Google//Chrome SxS//Application//chrome.exe",
    middleware: [
      webpackDevMiddleware(bundler, {
          publicPath: webpackSettings.output.publicPath,
          stats: { colors: true }
        }),
      webpackHotMiddleware(bundler)
      // historyApiFallback()
    ],
    files: [
      path.join(process.cwd(), "build/") + '**/*.html'
    ]
  })
})

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

gulp.task('watch', function() {
    gulp.watch(path.join(process.cwd(), "build/sass/") + "**/*.scss", ['sass-task']);
});

// -------------------------- //
// Run gulp with default task //
// -------------------------- //

gulp.task('default', ['sass-task', 'webpack', 'dev', 'watch']);
