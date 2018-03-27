var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
});

gulp.task('js', function() {
    return gulp.src([ 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(gulp.dest("src/js"))
});

gulp.task('default', ['js', 'sass']);