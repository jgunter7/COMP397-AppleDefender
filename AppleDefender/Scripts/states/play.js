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
            for (var apple = 0; apple < apples.length; apple++) {
                apples[apple].update();
            }
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
            wall = new objects.Wall("wood_wall");
            wall.SetUpWall(canvas.clientWidth * 0.75, 0, 1000);
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
            //add apples to game
            for (var apple = 0; apple < 30; apple++) {
                apples[apple] = new objects.Apple("apple");
                apples[apple].SetUpApple(3, config.APPLE_SPEED1);
                apples[apple].scaleX = 0.4;
                apples[apple].scaleY = 0.4;
                game.addChild(apples[apple]);
            }
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