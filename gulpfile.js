var gulp = require('gulp'),
  less = require('gulp-less');
//当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
notify = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  changed = require('gulp-changed'),
  base64 = require('gulp-base64'),
  gulpif = require('gulp-if'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync'),
  rename = require('gulp-rename'),
  imagemin = require('gulp-imagemin'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  gzip = require('gulp-gzip'),
  del = require('del'),
  cdn = require('gulp-cdn-replace'),
  fileinclude = require('gulp-file-include');
var reload = browserSync.reload;

var destPath = {
  html: 'src',
  less: 'dis/css',
  script: 'src/js',
  image: 'src/img'
};

gulp.task('less', function() {
  gulp.src('src/less/*.less')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(
      changed(destPath.less)
    )
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['last 5 versions', 'Android >= 2.3'],
      cascade: false, //是否美化属性值 默认：true 像这样：
      remove: false //是否去掉不必要的前缀 默认：true
    }))
    .pipe(base64({
            maxImageSize: 1024*1024, // bytes 
        }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('server', function() {
  return browserSync.init({
    server: {
      baseDir: './dist'
    },
    port: 3000
  })
})

gulp.task('fileinclude', function() {
  gulp.src('src/*.html')
    // .pipe(changed(destPath.html))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('cdn', function() {
  gulp.src('src/*.html')
    .pipe(cdn({
      dir: './dist',
      root: {
        js: 'http://cdn.example.com/somename',
        css: 'http://cdn.example.com/somename'
      }
    }))
})


gulp.task('js', function() {
  gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    // .pipe(gzip())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/js'));

});

gulp.task('images', function() {
  gulp.src('src/img/**/*.+(png|jpg|jpeg|gif)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function(cb) {
  del(['dist/css', 'dist/js'])
});

gulp.task('watch', function() {
  gulp.watch(['./src/less/*.less'], ['less']).on('change', reload);
  gulp.watch(['./src/**/*.html'], ['fileinclude']).on('change', reload);
  gulp.watch(['./src/js/*.js'], ['js']).on('change', reload);
})

gulp.task('default', ['watch'])