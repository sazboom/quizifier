/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'assets/js/coffee',
        src: ['*.coffee'],
        dest: 'assets/js/compiled',
        ext: '.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task.
  grunt.registerTask('default');

};
