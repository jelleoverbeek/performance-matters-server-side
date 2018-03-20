'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const nodemon = require('gulp-nodemon')

gulp.task('sass', function () {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'))
})

gulp.task('cssDeps', function () {
    const files = [
        "./node_modules/leaflet/dist/leaflet.css",
    ];

    return gulp.src(files)
        .pipe(concat('dependencies.css'))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('jsDeps', function () {
    const files = [
        "./node_modules/leaflet/dist/leaflet.js",
        "./node_modules/terraformer/terraformer.js",
        "./node_modules/terraformer-wkt-parser/terraformer-wkt-parser.js"
    ];

    return gulp.src(files)
        .pipe(concat('dependencies.js'))
        .pipe(gulp.dest('./assets/js'));
})

gulp.task('develop', function () {
    const stream = nodemon({ script: 'app.js',
        ext: 'html js css scss',
        ignore: ['ignored.js']
    })
    stream
        .on('restart', () => {
            console.log('restarted!')
        })
        .on('crash', () => {
            console.error('Application has crashed!\n')
            stream.emit('restart', 10)  // restart the server in 10 seconds
        })
})

gulp.task('sass:watch', function () {
    gulp.watch('./assets/scss/**/*.scss', ['sass'])
})

gulp.task('default', ['sass']);