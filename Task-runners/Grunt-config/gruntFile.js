const sass = require('node-sass');

module.exports = function (grunt) {

    grunt.initConfig({

        // Convert sass to css
        sass: {

            options: {
                implementation: sass
            },

            dist: {
                files: {
                    'src/css/style.css': 'build/scss/style.scss'
                }
            }
        },

        // Concat css files to a mainStyle.css
        concat: {

            css: {
                src: ['src/css/style.css', 'build/css/test.css'],
                dest: 'src/css/mainStyle.css'
            },

            js: {
                src: ['build/js/test1.js', 'build/js/test2.js'],
                dest: 'src/js/script.js'
            }

            /* The setup below supports concatenation for multiple files 
           
            css: {
                files: {
                    'src/css/mainStyle.css': [
                        'src/css/style.css', 'build/css/test.css'
                    ]
                }
            } 
            */
        },

        // Minify mainStyle.css
        cssmin: {
            dist: {
                files: {
                    'src/css/mainStyle.min.css': ['src/css/mainStyle.css']
                }
            }
        },

        // Minify script.css
        uglify: {
            dist: {
                files: {
                    'src/js/script.min.js': ['src/js/script.js']
                }
            }
        },

        // Optimize images
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'build/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'src/assets/img'
                }]
            }
        },

        // Watch css and js files for changes
        watch: {
            css: {
                files: ['build/scss/*.scss', 'build/css/*.css'],
                tasks: ['sass', 'concat'],
            },

            scripts: {
                files: 'build/js/*.js',
                tasks: ['concat'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'uglify', 'imagemin', 'watch']);
}