const gulp = require('gulp'); // 引入gulp
const htmlmin = require('gulp-minify-html'); //引入html压缩
const minicss = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch');
const babel = require('gulp-babel@7');
const es2015 = require('babel-preset-es2015');
const uglify = require('gulp-uglify'); //压缩js
const rename = require('gulp-rename'); //重命名



//压缩html
gulp.task('uglifyhtml', () => {
    return gulp.src('src/*html') //引入项目文件
        .pipe(htmlmin()) //执行查件压缩
        .pipe(gulp.dest('dist/')); //
})

//压缩css
gulp.task('uglifycss', () => {
    return gulp.src('src/css/*.css')
        .pipe(minicss()) //执行压缩插件
        .pipe(gulp.dest('dist/css')); //输出
})

//压缩图片 png

gulp.task('uglifypng', () => {
    return gulp.src('src/img/*.png')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/src/img'));
});
//es6转es5
//gulp-babel gulp-core  babel-preset-es2015
gulp.task('babeljs', () => {
    return gulp.src('src/script/*.js') //引入文件
        .pipe(babel({
            presets: ['es2015']
        })) //执行压缩插件
        .pipe(gulp.dest('dist/src/script')); //输出
});


//监听
gulp.task('default', function() { //default:默认名称，编译时可以省略
    watch(['src/*.html', 'src/css/*.css', 'src/img/*.png'], gulp.parallel('uglifyhtml', 'uglifycss', 'uglifypng'));
});