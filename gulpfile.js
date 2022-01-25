//"use strict" makes JS code to run in strict mode and to avoid accidental global uses of undefined methods.
//Things run faster, some warnings throw fatal errors, it's better to always use it to make a neater code.
//Everything needs to be defined before use.
'use strict'

//First off, we are importing the npm packages that we installed as modules. 
//This enables us to access the package functions in our Gulp tasks. 

//here we are importing a gulp function
var gulp = require("gulp");

//here we are loading packages

//this will compile sass files into css
var sass = require("gulp-sass");

// the postcss and cssnano are plugins used to minify the final css file
var postcss = require("gulp-postcss");
var cssnano = require("cssnano");

// terser minifies the JS file
var terser = require('gulp-terser');

//Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you.adds vendor prefixes to CSS 
var autoprefixer = require("autoprefixer");

// run and syncs a local server to our website files. importing browsersync with this line.
//the create function creates a browsersync instance that we can use to run our local server
var browserSync = require("browser-sync").create();

var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "app/scss/main.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "app/css"
    }

    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};

//this function will take the style.scss file and compile it to css
// using the sass function then use postcss to minify the file with
// cssnano and finally save the resulting css file in the dist folder
//We’re also creating a sourcemap file so you can see where in the Sass file each style rule comes from.
function scssTask() {
    return gulp
        .src(paths.styles.src,{ sourcemaps: true })
        .pipe(sass())
        .on("error", sass.logError)
        // Use postcss with autoprefixer and compress the compiled file using cssnano
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest(paths.styles.dest))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream());
}

// JavaScript Task
// We’re also creating a sourcemap file so you can see where in the js file each rule comes from.
// the function takes teh script.js file and minifies it using terser then
// saves the file in the dist folder. it also creates a sorucemap file.
// We are not doing bunding here just assuming tyhat we are working with
// vanilla JS
// function jsTask(){
//     return src('app/js/script.js', { sourcemaps: true })
//       .pipe(terser())
//       .pipe(dest('dist', { sourcemaps: '.' }));
//   }


// A simple task to reload the page/the local website
function browserSyncReload(done) {
    browserSync.reload();
    done();
}

// creating browersyncs task. It will initialise the local server. Add browsersync initialization at the start of the watch task
function watch(done) {
    browserSync.init({
        //it runs the init function whihc launches the locals erver, using baseDir server option
        //
        // You can tell browserSync to use this directory and serve it as a mini-server
       //we want to set baseDir to '.'. This indicates that the local server will launch the website from the same directory as the gulpfile is in.
        //Since both the index.html file and the gulpfile are in the project root, we want the website to run from the same location.
        server: {
            baseDir: "./app"
        }
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });
    gulp.watch(paths.styles.src, scssTask);
    // We should tell gulp which files to watch to trigger the reload
    // This can be html or whatever you're using to develop your website
    // Note -- you can obviously add the path to the Paths object
    //gulp.watch("src/*.html", reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    done();
}

// We don't have to expose the reload function
// It's currently only useful in other functions


// Don't forget to expose the task!
exports.watch = watch

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.scssTask = scssTask;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.parallel(scssTask, watch);

/*
 * You can still use `gulp.task` to expose tasks
 */
//gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);

