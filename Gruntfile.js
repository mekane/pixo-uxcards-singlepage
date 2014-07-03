/*
 * Requirements: gem install sass
 *
 */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
        dist: {
          files: [{
            src: 'scss/*.scss',
            dest: 'css/main.css',
          }]
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
