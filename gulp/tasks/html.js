import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";
import webphtml from "gulp-webp-html";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(fileinclude()) // Если будем работать с pug, то закомменить
        // .pipe(pug({ // Комментируем если не работаем с pug и наоборот
        //         // Сжатие HTML
        //         pretty: true,
        //         // Показывать в терминале какой файл обработан
        //         verbose: true,
        //     }) 
        // )
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        // .pipe(webpHtmlNosvg())
        .pipe(webphtml())
        .pipe(
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js'
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}