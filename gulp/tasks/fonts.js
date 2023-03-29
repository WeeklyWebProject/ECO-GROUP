// import fs from 'fs';
// import fonter from 'gulp-fonter';
// import ttf2woff2 from 'gulp-ttf2woff2';

export const fontStyle = () =>   {
    return app.gulp.src(app.path.src.fonts)
        .pipe(app.gulp.dest(app.path.build.fonts))
}