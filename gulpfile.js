var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),           //css3
    livereload = require('gulp-livereload'),  //发生变化，自动刷新。需配合浏览器
    sourcemaps = require('gulp-sourcemaps'),  //可以在控制器调试scss
    watch = require('gulp-watch');   //自动监控，不用时时手动编译

gulp.task('scss',function(){
    return gulp.src('scss/**/*.scss')

        //初始化map
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefix({browsers: ['last 2 versions', 'Android >= 4.0']}))

        //编译map
        .pipe(sourcemaps.write('/'))

        //编译样式文件地址
        // .pipe(minifyCSS())

        // .pipe(plumber())
        .pipe(gulp.dest('dist'))
        .pipe(livereload());

});
gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('scss/**/*.scss',['scss']);
});