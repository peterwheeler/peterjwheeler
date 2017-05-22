// --------------------------------- //
// All requirements for running gulp //
// --------------------------------- //

var gulp = require('gulp');
var	gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var webpack = require('webpack');
var environments = require('gulp-environments');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var historyApiFallback = require('connect-history-api-fallback');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var WriteFilePlugin = require('write-file-webpack-plugin');
var runSequence = require('run-sequence');
var path = require('path');
var bundler;

// --------------------------------- //
// Set variables for gulp to run in  //
// --------------------------------- //

var env = process.env.NODE_ENV;
var babelenv = process.env.BABEL_ENV;
var source, directory, webpackSettings;

// ------------------------------ //
// Error handler for running gulp //
// ------------------------------ //

var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit("end");
};

// -------------- //
// Webpack config //
// -------------- //
// Config comes from https://words.mxbry.com/making-react-webpack-browsersync-gulp-play-nice-and-hot-reload-b2c1e01522e3 //

var webpackDevelopment = {
  entry: {
    app: [
        "webpack/hot/dev-server?reload",
        "webpack-hot-middleware/client",
        "react-hot-loader/patch",
        path.join(__dirname, "build/js/app/Main.jsx")
    ]
  },
  output: {
    path: path.join(__dirname, "build/js/"),
    filename: "bundle.js",
    publicPath: "/js/"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  bail: true,
  module: {
    loaders: [{
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, "build/js/"),
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

var webpackProduction = {
  entry: path.join(__dirname, "build/js/app/Main.jsx"),
  output: {
    path: path.join(__dirname, "docs/js"),
    filename: "bundle.js",
    publicPath: "/js/"
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new WriteFilePlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'cheap-module-source-map',
  module: {
      loaders: [{
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, "build/js/"),
        exclude: /(node_modules|bower_components)/,
        loader: ['babel-loader?presets[]=react,presets[]=es2015']
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

gulp.task('set-variables', function() {
    source = 'build';
    directory = env === 'development' ? "build" : env === 'production' ? "docs" : "development";
    webpackSettings = env === 'development' ? webpackDevelopment : env === 'production' ? webpackProduction : webpackDevelopment;
});

gulp.task('webpack', function(callback) {
  bundler = webpack(webpackSettings);
});

gulp.task('sass-task', function() {
    var s = sass({});
    s.on('error',function(e){
      gutil.log(e);
      s.end();
    });
    return gulp.src(source + "/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest(directory + "/css"))
        .pipe(browserSync.stream());
});

// --------------------- //
// Serve and watch build //
// --------------------- //

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: ["./", "./" + directory + "/"]
    },
    port: 4000,
    browser: "C://Users//pw8g08//AppData//Local//Google//Chrome SxS//Application//chrome.exe",
    middleware: env === 'development' ? [webpackDevMiddleware(bundler, {publicPath: webpackDevelopment.output.publicPath, stats: { colors: true } }), webpackHotMiddleware(bundler)] :
                        env === 'production' ? historyApiFallback() : [webpackDevMiddleware(bundler, {publicPath: webpackDevelopment.output.publicPath, stats: { colors: true } }), webpackHotMiddleware(bundler)],
    files: [
      path.join(__dirname, directory + '/**/*.html')
    ]
  })
})

// ------------------------------------ //
// Misc tasks to do at the end of build //
// ------------------------------------ //

gulp.task('useref', function(){
  return gulp.src(source + "/index.html")
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    // .pipe(gulpIf("*.js", uglify()))
     // .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // Minifies only if it's a CSS file
    .pipe(gulpIf("*.css", cssnano()))
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest(directory));
});

gulp.task('css', function() {
	return gulp.src(source + "/css/**/*")
		.pipe(gulp.dest(directory + "/css"))
    .pipe(browserSync.stream());
});

gulp.task('images', function(){
  return gulp.src(source + "/images/**/*")
	// return gulp.src(source + "/images/**/*.+(png|jpg|gif|svg)")
		.pipe(imagemin())
		.pipe(gulp.dest(directory + "/images"));
});

gulp.task('watch', function() {
    gulp.watch(path.join(__dirname, source + "/sass/") + "**/*.scss", ['sass-task']);
});

// -------------------------- //
// Run gulp with tasks //
// -------------------------- //

gulp.task('env-dev', function() {
    env = 'development';
    babelenv = env;
    return env = 'development';
});

gulp.task('env-prod', function() {
    env = 'production';
    babelenv = env;
    return env = 'production';
});

gulp.task('env-docs', function() {
    env = 'docs';
    babelenv = env;
    return env = 'docs';
});

gulp.task('default', ['env-dev'], function(){
  runSequence('set-variables', 'sass-task', ['webpack', 'serve'], 'watch')
});

gulp.task('build', ['env-prod'], function(){
  runSequence('set-variables', 'sass-task', ['webpack', 'serve'], 'watch')
});

gulp.task('docs', ['env-docs'], function(){
  runSequence('set-variables', 'sass-task', 'useref', ['webpack', 'serve'], 'watch')
});
