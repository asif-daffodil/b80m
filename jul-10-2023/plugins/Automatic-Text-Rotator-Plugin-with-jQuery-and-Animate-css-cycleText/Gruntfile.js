module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            build: ['Gruntfile.js', 'src/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        uglify: {
            build: {
                src: 'src/js/jquery.cycleText.js',
                dest: 'dist/js/jquery.cycleText.min.js'
            }
        },

        copy: {
            files: {
                expand: true,
                cwd: 'src/',
                src: ['css/**'],
                dest: 'dist/'
            }
        },

        watch: {
            build: {
                files: ['src/**'],
                tasks: ['jshint', 'uglify', 'copy'],
                options: {spawn: false}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'uglify', 'copy', 'watch']);
};