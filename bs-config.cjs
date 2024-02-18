module.exports = {
  files: ['dist/**/*.html', 'dist/**/*.css', 'dist/**/*.js'],
  watch: true,
  open: "external",
  server: {
    baseDir: 'dist',
    https: true,
  },
  notify: false,
  startPath: '/recruit/',
};
