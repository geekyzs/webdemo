var gulp = require('gulp'); //引进gulp
var compass = require('gulp-compass'); //编译sass
var mincss = require('gulp-minify-css'); //编译sass
var uglify = require('gulp-uglify'); //压缩JS
var rev = require('gulp-rev'); //文件名加MD5后缀
var revCollector = require('gulp-rev-collector'); //路径替换
var concat = require('gulp-concat'); //文件合并
gulp.task('css', function() { //编译CSS//压缩CSS
	gulp.src('./src/sass/*.scss')
		//编译sass
		.pipe(compass({
			config_file: './config.rb',
			css: './dist/css/',
			sass: './src/sass/'
		}))
		.pipe(mincss())
		.pipe(rev()) //- 文件名加MD5后缀
		.pipe(gulp.dest('./dist/css'))//输出到文件夹
		.pipe(rev.manifest())
		.pipe( gulp.dest('dist/rev/css'));
});
gulp.task('js', function() { //压缩JS
	return gulp.src('src/js/*.js')
		.pipe(concat('main.js')) //合并所有js到main.js
		.pipe(uglify()) //压缩
		.pipe(rev()) //- 文件名加MD5后缀
		.pipe(gulp.dest('./dist/js'))//输出到文件夹
		.pipe(rev.manifest())
		.pipe( gulp.dest('dist/rev/js'));
});
gulp.task('rev', function () {//替换
    return gulp.src(['dist/rev/**/*.json', 'src/*.html'])
        .pipe( revCollector({
            replaceReved: true,
        }))
        .pipe( gulp.dest('dist'));
});
//监控
gulp.task('watchcs', function() {
	gulp.watch('./src/sass/*.scss',['css'])
});
gulp.task('watchjs', function() {
	gulp.watch('./src/js/*.js', ['js'])
});
gulp.task('watchrev', function() {
	gulp.watch('dist/rev/**/*.json',['rev'])
});
gulp.task('default', ['watchcs', 'watchjs','watchrev'], function() {
	console.log("自动编译、压缩CSS和JS和加MD5后缀");
});