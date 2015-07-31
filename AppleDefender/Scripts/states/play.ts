module states {
    export class Play {


        //CONSTRUCTOR
        constructor() {
            this.main();
        }


        // PUBLIC METHODS
        // update method
        public update() {
            ocean.update();
            plane.update();
            island.update();

            for (var cloud = 0; cloud < 3; cloud++) {
                clouds[cloud].update();
                collision.check(clouds[cloud]);
            }

            collision.check(island);

            this.checkLives();


            scoreboard.update();
        }

        // destroy method
        public destroy() {
            plane.engineSound.stop();
            game.removeAllChildren();
        }

        // utility method that checks if lives are zero
        public checkLives() {
            if (scoreboard.lives < 1) {
                score = scoreboard.score;
                this.destroy();
                currentState = config.GAME_OVER_STATE;
                changeState();
            }
        }

        // main method
        public main() {
        // instantiate new game container
        game = new createjs.Container();

        //add ocean object to stage
        ocean = new objects.Ocean(assets.loader.getResult("ocean"));
        game.addChild(ocean);

        //add island object to stage
        island = new objects.Island("island");
        game.addChild(island);

        // add plane object to stage
        plane = new objects.Plane("plane");
        game.addChild(plane);

        // add 3 cloud objects to stage
        for (var cloud = 0; cloud < 3; cloud++) {
            clouds[cloud] = new objects.Cloud("cloud");
            game.addChild(clouds[cloud]);
        }


        //add scoreboard
        scoreboard = new objects.ScoreBoard();

        //add collision manager
        collision = new managers.Collision();

        //add game container to stage
        stage.addChild(game);
    }
    }
} 