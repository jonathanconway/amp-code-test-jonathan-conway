module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'build/site.css': 'app/site.scss'
                }
            }
        },

        watch: {
            sass: {
                tasks: ['sass'],
                files: 'app/**/*.scss'
            }

        },

        concurrent: {
            e2e: ['connect', 'protractor'],
            dev: ['connect', 'sass', 'watch']
        },

        connect: {
            server: {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        },

        protractor: {
            options: {
                configFile: './protractor.config.js',
            },
            all: {
                options: {
                    configFile: './protractor.config.js',
                }
            }
        },

    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');


    grunt.registerTask('e2e', ['concurrent:e2e']);
    grunt.registerTask('default', ['concurrent:dev']);

};