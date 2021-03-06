module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-coffee-jshint');

    grunt.initConfig({
        connect: {
            server: {
              options: {
                    port: 1337,
                    base: './'
                }
            }
        },
        coffee_jshint: {
            options: {
                "indent": 4,
            },
            files: {
                'src': 'src/*.coffee'
            }
        },
        coffee:{
            compileJoined: {
                options: {
                    join: true
                },
                files: {
                    'js/game.js': [
                        'src/math.coffee',
                        'src/physics.coffee',
                        'src/engine.coffee',
                        'src/aquator-ui.coffee',
                        'src/aquator-level.coffee',
                        'src/aquator-enemies.coffee',
                        'src/aquator-player.coffee',
                        'src/aquator-game.coffee',
                    ],
                }
            },
        },
        concat:{
          sources: {
            src: 'src/*.js',
            dest: 'js/include.js'
          }
        },
        watch: {
            coffee: {
                files: ['src/*.coffee'],
                tasks: ['coffee']
            },
            concat: {
                files: ['src/*.js'],
                tasks: ['concat']
            }
        }
    });
    grunt.registerTask('default',[
        'coffee', 'connect', 'concat', 'watch'
    ]);
};
