var states;
(function (states) {
    var Play = (function () {
        //CONSTRUCTOR
        function Play() {
            this.wallType = "wood";
            this.main();
        }
        // PUBLIC METHODS
        // update method
        Play.prototype.update = function () {
            gunner.update();
            bulletManager.update();
        };
        // destroy method
        Play.prototype.destroy = function () {
            //plane.engineSound.stop();
            game.removeAllChildren();
        };
        // utility method that checks if lives are zero
        Play.prototype.checkLives = function () {
            if (scoreboard.lives < 1) {
                score = scoreboard.score;
                this.destroy();
                currentState = config.GAME_OVER_STATE;
                changeState();
            }
        };
        // main method
        Play.prototype.main = function () {
            // stage click events:----
            stage.on("click", this.Shoot);
            // instantiate new game container
            game = new createjs.Container();
            //add grass to stage / avoids overlap
            grass2 = new objects.Image("grass");
            grass = new objects.Image("grass");
            grass.SetPosition(0, 0);
            grass2.SetPosition(500, 0);
            grass.scaleX = 1;
            grass.scaleY = 1.5;
            grass2.scaleX = 1.5;
            grass2.scaleY = 1.5;
            game.addChild(grass);
            game.addChild(grass2);
            // add wall type...
            //wall = new objects.Image("brick_wall");
            //wall = new objects.Image("steel_wall");
            wall = new objects.Image("wood_wall");
            wall.SetPosition(canvas.clientWidth * 0.75, 0);
            wall.scaleY = 1.5;
            wall.alpha = 0.8;
            game.addChild(wall);
            //add toolbar background...
            bgToolBar = new objects.Image("bg");
            bgToolBar.SetPosition(0, canvas.clientHeight - 350);
            bgToolBar.scaleX = 2;
            game.addChild(bgToolBar);
            // add gun to game object
            gunner = new objects.Gun("gun");
            gunner.scaleX = gunner.scaleY = Math.min(180 / gunner.width, 180 / gunner.height);
            game.addChild(gunner);
            // add 3 cloud objects to stage
            //for (var cloud = 0; cloud < 3; cloud++) {
            //    clouds[cloud] = new objects.Cloud("cloud");
            //    game.addChild(clouds[cloud]);
            //}
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
            // add bullet manager
            bulletManager = new managers.BulletManager();
            //add game container to stage
            stage.addChild(game);
        };
        Play.prototype.Shoot = function () {
            config.FIRING = true;
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map