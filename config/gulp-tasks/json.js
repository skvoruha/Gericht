// json функция
export const json = () => {
  return app.gulp
    .src(app.path.src.json)
    .pipe(app.lp.plumber())
    .pipe(app.gulp.dest(app.path.build.json));
};
