var gulp = require('gulp');//引进gulp
var compass = require('gulp-compass');//编译sass
var mincss = require('gulp-minify-css');//压缩CSS
var rev = require('gulp-rev');//文件名加MD5后缀
var revCollector = require('gulp-rev-collector');//路径替换
var minifyHTML   = require('gulp-minify-html');//压缩html
var autoprefixer=require('gulp-autoprefixer');//处理浏览器前缀
gulp.task('css', function() {
	gulp.src('./src/sass/*.scss')
	//编译sass
		.pipe(compass({
			config_file: './config.rb',
			css: './dist/css/',
			sass: './src/sass/'
		}))
		//处理浏览器前缀
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(mincss()) //压缩CSS
		.pipe(rev()) //- 文件名加MD5后缀
		.pipe(gulp.dest('./dist/css'))//输出到文件夹
		.pipe(rev.manifest())
		.pipe( gulp.dest('dist/rev/css'));
});
gulp.task('rev', function () {//替换
    return gulp.src(['dist/rev/css/*.json', 'src/*.html'])
        .pipe( revCollector({
            replaceReved: true,
        }))
        .pipe( minifyHTML({
                empty:true,
                spare:true
            }) )
        .pipe( gulp.dest('dist'));
});
//监控
gulp.task('watchcs',function(){
	gulp.watch('./src/sass/*.scss',['css'])
});
gulp.task('watchrev',function(){
	gulp.watch('dist/rev/css/*.json',['rev'])
});
gulp.task('default',['watchcs','watchrev'] ,function() {
	console.log("自动编译SASS、压缩CSS、加MD5后缀、处理浏览器前缀");
});
