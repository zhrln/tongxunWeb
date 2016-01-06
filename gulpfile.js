/**
 * Created by yanjing on 12/7/15.
 */
var gulp = require("gulp");
var clean = require('gulp-clean');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task("webpack:dev", ['clean'], function() {
    var _config = Object.create(webpackConfig);
    _config.watch = true;
    webpack(_config, function(err, stats) {
        if(err) throw new Error("webpack:dev", err);
    });
});

gulp.task("webpack:build", ['clean'], function() {
    var _config = Object.create(webpackConfig);
    _config.plugins = _config.plugins.concat(
        new webpack.optimize.UglifyJsPlugin()
    );
    webpack(_config, function(err, stats) {
        if(err) throw new Error("webpack:build", err);
    });
});

gulp.task('clean', function() {
    return gulp
        .src('./build/*')
        .pipe(clean());
});

gulp.task("default", ["webpack:dev"]);

gulp.task("build", ["webpack:build"]);