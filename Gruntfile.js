module.exports = function( grunt ) {
    grunt.loadNpmTasks( "grunt-contrib-uglify" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-contrib-connect" );
    
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    hostname: "",
                    port: 8001,
                    base: "."
                }
            }
        },
        watch: {
            dev: {
              files: '<%= jshint.src %>',
              tasks: [ "jshint", "uglify" ]
            }
        },
        uglify: {
            dist: {
                files: {
                    "jquery.pagevisibility.min.js": [ "jquery.pagevisibility.js" ]
                }
            }
        },
        jshint: {
            src: [ "Gruntfile.js", "jquery.pagevisibility.js" ],
            options: {
                curly: true,
                eqeqeq: true,
                newcap: true,
                eqnull: true,
                bitwise: true,
                immed: true,
                noarg: true,
                unused: true,
                trailing: true,
                undef: true,
                browser: true,
                nonew: true,
                noempty: true,
                globals: {
                    module: true,
                    jQuery: false
                }
            }
        }
    });
    
    grunt.registerTask( "default", [ "jshint", "uglify" ]);
    grunt.registerTask( "dev", [ "connect", "watch" ]);
};