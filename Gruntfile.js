/**
 * Created by Nijin on 13-11-2015.
 */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-msdeploy');
    //
    // Define the configuration for all the tasks
    grunt.initConfig({
        appConfig: {
            // configurable paths
            path: require('./grunt.config.json')
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['<%= appConfig.path.scripts%>/{,**/}*.module.js','<%= appConfig.path.scripts%>/{,**/}*.js'],
                dest: '.tmp/concat/scripts/scripts.js'
            }
        },
        karma: {
            options: {
                // point all tasks to karma config file
                configFile: 'test/karma.conf.js'
            },
            unit: {
                // run tests once instead of continuously
                singleRun: false
            }
        },
        ngtemplates: {
            app: {
                options: {
                    prefix: '/'
                },
                src: ['<%= appConfig.path.html%>'],
                dest: '.tmp/concat/scripts/templates.js',
                options: {
                    htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true },
                    bootstrap:  function(module, script) {
                        return "angular.module('app.global').run(['$templateCache', function($templateCache) {" + script + "}])";
                    }
                }
            }
        },

        uglify: {
            options: {
                mangle: false,
                compress:{}
            }
        },
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= appConfig.path.build %>/{,*/}*',
                            '!<%= appConfig.path.build %>/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp',
            app:'app'
        },

        // Automatically inject Bower components into the scripts
        wiredep: {
            options: {
                //   cwd: '<%= yeoman.scripts %>'
            },
            app: {
                src: ['<%= appConfig.path.client %>/index.html'],
                ignorePath: /\.\.\//
            },
            sass: {
                src: ['<%= appConfig.path.styles %>/{,*/}*.{scss,sass}'],
                ignorePath: /(\.\.\/){1,2}bower_components\//
            }
        },
        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'compass:server'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'compass:dist',
                'imagemin',
                'svgmin'

            ]
        },
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },
        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= appConfig.path.styles %>',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= appConfig.path.images %>',
                javascriptsDir: '<%= appConfig.path.scripts %>',
                fontsDir: '<%= appConfig.path.styles %>/fonts',
                importPath: './bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= appConfig.path.build %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        svgmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= appConfig.path.images %>',
                        src: '{,*/}*.svg',
                        dest: '<%= appConfig.path.build %>/images'
                    }
                ]
            }
        },
        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= appConfig.path.images %>',
                        src: '{,*/}*.{png,jpg,jpeg,gif}',
                        dest: '<%= appConfig.path.build %>/images'
                    }
                ]
            }
        },
        //copy html
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/styles/',
                        src: '{,*/}*.css',
                        dest: '.tmp/styles/'
                    }
                ]
            }
        },
        // The actual grunt server settings
        connect: {
            options: {
                port: 9001,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35730,
                protocol: 'https',
                key: grunt.file.read('server.key').toString(),
                cert: grunt.file.read('server.crt').toString(),
                ca: grunt.file.read('ca.crt').toString(),
                // Modrewrite rule, connect.static(path) for each path in target's base
                middleware: function (connect, options) {
                    var optBase = (typeof options.base === 'string') ? [options.base] : options.base,
                        middleware = [require('connect-modrewrite')(['!(\\..+)$ / [L]'])]
                            .concat(optBase.map(function (path) {
                                if (path.indexOf('rewrite|') === -1) {
                                    return connect.static(path);
                                } else {
                                    path = path.replace(/\\/g, '/').split('|');
                                    return  connect().use(path[1], connect.static(path[2]))
                                }
                            }));
                    middleware.unshift(function (req, res, next) {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Access-Control-Allow-Methods', '*');
                        //a console.log('foo') here is helpful to see if it runs
                        return next();
                    });


                    middleware.unshift(function (req, res, next) {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Access-Control-Allow-Methods', '*');
                        //a console.log('foo') here is helpful to see if it runs
                        return next();
                    });

                    return middleware;
                }
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        'rewrite|/bower_components|./bower_components',
                        'rewrite|/client/styles|./client/styles', // for sourcemaps
                        'rewrite|/client/app|./client/app',
                        '<%= appConfig.path.client %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        'rewrite|/bower_components|./bower_components',
                        'rewrite|/client/styles|./client/styles',
                        '<%=appConfig.path.client%>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= appConfig.path.build %>'
                }
            }
        },
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= appConfig.path.scripts%>/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            compass: {
                files: ['<%= appConfig.path.styles %>/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= appConfig.path.client %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= appConfig.path.images %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= appConfig.path.client %>/index.html',
            options: {
                dest: '<%= appConfig.path.build %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // ngmin tries to make the code safe for minification automatically by
        // using the Angular long form for dependency injection. It doesn't work on
        // things like resolve or inject so those have to be done manually.
        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/concat/scripts',
                        src: '*.js',
                        dest: '.tmp/concat/scripts'
                    }
                ]
            }
        },
        replace: {
            development: {
                options: {
                    patterns: [
                        {
                            json: grunt.file.readJSON('./client/config/environments/development.json')
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['./client/config/configuration.constant.js'],
                        dest: '<%= appConfig.path.scripts %>/global/'
                    }
                ]
            },
            staging: {
                options: {
                    patterns: [{
                        json: grunt.file.readJSON('./client/config/environments/staging.json')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./client/config/configuration.constant.js'],
                    dest: '<%= appConfig.path.scripts %>/global/'
                }]
            },
            production: {
                options: {
                    patterns: [{
                        json: grunt.file.readJSON('./client/config/environments/production.json')
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./client/config/configuration.constant.js'],
                    dest: '<%= appConfig.path.scripts %>/global/'
                }]
            }
        },
        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= appConfig.path.client %>',
                        dest: '<%= appConfig.path.build %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            '*.html',
                            '{,*/,*/}*.html',
                            'images/{,*/}*.{webp}',
                            'fonts/*'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%= appConfig.path.build %>/images',
                        src: ['generated/*']
                    },
                    {
                        expand: true,
                        cwd: '.',
                        src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
                        dest: '<%= appConfig.path.build %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= appConfig.path.client %>',
                        src: 'translations/*',
                        dest: '<%= appConfig.path.build %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= appConfig.path.client %>',
                        src: 'web.config',
                        dest: '<%= appConfig.path.build %>'
                    },
                    {
                        //for font-awesome
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/font-awesome-css',
                        src: ['fonts/*.*'],
                        dest: '<%= appConfig.path.build %>'
                    }

                ]
            },
            styles: {
                expand: true,
                cwd: '<%= appConfig.path.styles %>',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            html:{
                expand: true,
                cwd: '<%= appConfig.path.app %>',
                dest: 'app',
                src: '{,**/}/*.html'
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= appConfig.path.build %>/*.html']
            }
        },
        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= appConfig.path.build %>/scripts/{,*/}{,*/}*.js',
                    '<%= appConfig.path.build %>/styles/{,*/}*.css',
                    '<%= appConfig.path.build %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= appConfig.path.build %>/styles/fonts/*'
                ]
            }
        },
        usemin: {
            html: ['<%= appConfig.path.build %>/{,*/}*.html'],

            css: ['<%=  appConfig.path.build %>/styles/{,*/}*.css'],
            js: '<%=  appConfig.path.build %>/scripts/*.js',
            options: {
                assetsDirs: ['<%=  appConfig.path.build %>', '<%= appConfig.path.build %>/images'],
                patterns: {
                    js: [
                        [/(images\/.*?\.(?:gif|jpeg|jpg|png|webp))/gm, 'Update the JS to reference our revved images']
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= appConfig.path.build %>',
                        src: ['*.html', 'views/{,*/}*.html'],
                        dest: '<%= appConfig.path.build %>'
                    }
                ]
            }
        }
})
    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'build') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'wiredep',
            'replace:development',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });
    grunt.registerTask('build', [
        'replace:development',
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'concat:dist',
        'copy:html',
        'ngtemplates',
        'ngAnnotate',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
       'clean:app',
       'clean:server'
    ]);
    grunt.registerTask('buildstaging', [
        'replace:staging',
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'concat:dist',
        'copy:html',
        'ngtemplates',
        'ngmin',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
        'clean:app',
        'clean:server'
        //'msdeploy'
    ]);
    grunt.registerTask('buildproduction', [
        'replace:production',
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'concat:dist',
        'copy:html',
        'ngtemplates',
        'ngmin',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
        'clean:app',
        'clean:server'
        //'deployment task'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
}