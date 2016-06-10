var gulp = require('gulp'); //引进gulp
var mincss = require('gulp-minify-css'); //压缩CSS
var uglify = require('gulp-uglify'); //压缩JS
var concat = require('gulp-concat'); //合并
var rev = require('gulp-rev'); //文件名加MD5后缀
var rename = require('gulp-rename'); //重命名
var revCollector = require('gulp-rev-collector'); //替换静态资源的引用路径
var minifyHTML = require('gulp-minify-html');
var autoprefixer = require('gulp-autoprefixer'); //处理浏览器前缀
gulp.task('css', function() { //处理CSS
	gulp.src('src/css/*.css')
		.pipe(autoprefixer({ //处理浏览器前缀
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(concat('baidu.css')) //合并所有CSS到baidu.css
		.pipe(mincss()) //压缩CSS
		.pipe(rev()) //- 文件名加MD5后缀
		.pipe(rename({
			suffix: '.min'
		})) //重名名
		.pipe(gulp.dest('dist/css')) //输出到文件夹
		.pipe(rev.manifest())
		.pipe(gulp.dest('dist/rev/css'));
});
gulp.task('js', function() { //处理JS
	return gulp.src('./src/js/*.js')
		.pipe(concat('baidu.js')) //合并所有js到baidu.js
		.pipe(uglify()) //压缩JS
		.pipe(rev()) //- 文件名加MD5后缀
		.pipe(rename({
			suffix: '.min'
		})) //重名名
		.pipe(gulp.dest('./dist/js')) //输出
		.pipe(rev.manifest())
		.pipe(gulp.dest('./dist/rev/js'));
});
gulp.task('rev', function() { //替换静态资源的引用路径
	return gulp.src(['dist/rev/**/*.json', 'src/*.html'])
		.pipe(revCollector({
			replaceReved: true,
			dirReplacements: {
				'css': '/dist/css',
				'/js/': '/dist/js/',
				'cdn/': function(manifest_value) {
					return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
				}
			}
		}))
		.pipe(minifyHTML({
			empty: true,
			spare: true
		}))
		.pipe(gulp.dest('dist'));
});
//监控
gulp.task('watchcs', function() {
	gulp.watch('./src/css/*.css', ['css'])
});
gulp.task('watchjs', function() {
	gulp.watch('./src/js/*.js', ['js'])
});
gulp.task('watchrev', function() {
	gulp.watch('dist/rev/**/*.json', ['rev'])
});
gulp.task('default', ['watchcs', 'watchjs', 'watchrev'], function() {
	console.log("自动压缩合并CSS和JS、加MD5后缀、处理浏览器前缀、替换静态资源的引用路径");
});