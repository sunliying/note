module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
  svgstore: {
    options: {},
    default : {
      files: {
        './dest/dest.svg': ['./SVG/*.svg'],
      },
    },
  },
});
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.registerTask('default', ['svgstore']);

};
