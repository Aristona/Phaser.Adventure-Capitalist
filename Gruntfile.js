'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: './js/**/*.js',
                tasks: ['concat', 'babel', 'uglify']
            }
        },
        concat: {
            dist: {
                src: './js/**/*.js',
                dest: './dist/game.js'
            }
        },
        babel: {
            dist: {
                files: {
                    './dist/game.js': './dist/game.js'
                }
            }
        },
        uglify: {
            allSrc: {
                options: {
                    sourceMapName: './dist/game.min.js.map',
                    sourceMap: true,
                    banner: '/* Uglified on <%= grunt.template.today("yyyy-mm-dd HH:MM:ss")%>*/',
                    screwIE8: true
                },
                src: './dist/game.js',
                dest: './dist/game.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['watch']);
};