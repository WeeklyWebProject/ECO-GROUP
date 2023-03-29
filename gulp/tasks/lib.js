import webpack from "webpack-stream";

export const lib = () => {
    return app.gulp.src(app.path.src.lib, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })))
        .pipe(app.gulp.dest(app.path.build.lib))  
        .pipe(app.plugins.browsersync.stream());
}