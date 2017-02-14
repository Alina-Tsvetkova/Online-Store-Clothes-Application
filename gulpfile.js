var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    del = require('del');

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('build', ['clean'], function () {
    var buildCss = gulp.src('assets/**/*.css')
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('assets/dist'));

    var buildJs = gulp.src('app/**/*js')
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('assets/dist'));

});


gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('app/**/*.js', browserSync.reload);
    gulp.watch('app/**/*.html', browserSync.reload);
});