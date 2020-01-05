const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const plumber = require('gulp-plumber');


gulp.task('sass', function () {
    // , '!./WebContent/assets/style/sass/common/**/*.scss']
    return gulp.src('./WebContent/assets/style/sass/**/*.scss')
        .pipe(sassGlob())
        .pipe(plumber())
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(gulp.dest('./WebContent/assets/style/css/'));

});

gulp.task("watch", function() {

    gulp.watch('./WebContent/assets/style/sass/**/*.scss', gulp.task('sass'));

});