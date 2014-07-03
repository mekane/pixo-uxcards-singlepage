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
    },

    watch: {
        css: {
            files: ['scss/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        } 
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
