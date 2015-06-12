'use strict';

module.exports = function(grunt) {
 
    // configure grunt
    grunt.initConfig({
 
        browserify: {
            dist: {
                files: {
                    'public/build/bundle.js': [
                        'public/app/**/*.js'
                    ]
                },
                options: {
                    transform: [require('grunt-react').browserify]
                }
            },
            options: {
                browserifyOptions: {
                    debug: true
                },

            },
        },

        compass: {
            sassDir: 'public/scss',
            cssDir: 'public/css',
            imagesDir: 'public/img'
        },

        watch: {
            js: {
                files: [
                    'public/app/**/*.js'
                ],
                tasks: ['browserify']
            },
            livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                    livereload: true
                },
                files: [
                    'public/build/bundle.js',
                    'public/css/style.css',
                    'public/*.html'
                ]
            }
        }

    });
 
    // Load plug-ins
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // define tasks
    grunt.registerTask('default', [
        'browserify', 'compass'
    ]);
    grunt.registerTask('dev', [
        'watch'
    ]);
};
