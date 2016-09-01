module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({

        eslint: {
            dist: {
                src: ['index.js', 'src/**/*/js', 'test/**/*.js', 'Gruntfile.js']
            }
        },

        tape: {
            options: {
                pretty: false,
                output: 'console'
            },
            dev: {
                src: ['test/**/*.js' ]
            },
            test : {
                options: {
                    pretty: true
                },
                src: ['test/**/*.js' ]
            }
        },

        watch: {
            dev: {
                files: ['index.js', 'src/**/*.js', 'test/**/*.js'],
                tasks: ['tape:dev']
            }
        }
    });

    grunt.registerTask('test', ['tape:test']);
    grunt.registerTask('lint', ['eslint:dist']);
    grunt.registerTask('dev', ['watch:dev']);
};
