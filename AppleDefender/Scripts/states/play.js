var states;
(function (states) {
    var Play = (function () {
        //CONSTRUCTOR
        function Play() {
            this.wallType = "wood";
            this.wallCost = 1000;
            this.reloadCost = 1000;
            this.clipCost = 1000;
            this.wave = 1;
            this.main();
        }
        // PUBLIC METHODS
        // update method
        Play.prototype.update = function () {
            if (!pause) {
                gunner.update();
                if (autoGun)
                    config.FIRING = true; // auto fire weapon
                bulletManager.update();
                if (apples.length != 0) {
                    for (var apple = 0; apple < apples.length; apple++) {
                        apples[apple].update();
                    }
                }
                else {
                    this.NextWave();
                }
                wall.update();
            }
            hud.update();
        };
        // destroy method
        Play.prototype.destroy = function () {
            game.removeAllChildren();
        };
        // main method
        Play.prototype.main = function () {
            // add required background sound
            createjs.Sound.play("loop", { loop: -1, volume: 0.1 });
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
            // add gun to game object
            gunner = new objects.Gun("gun");
            gunner.scaleX = gunner.scaleY = Math.min(180 / gunner.width, 180 / gunner.height);
            game.addChild(gunner);
            // add wall type...
            this.CreateWall("wood_wall", 1000);
            //add toolbar background...
            bgToolBar = new objects.Image("bg");
            bgToolBar.SetPosition(0, canvas.clientHeight - 350);
            bgToolBar.scaleX = 2;
            game.addChild(bgToolBar);
            //add apples to game
            for (var apple = 0; apple < this.getNumApples(); apple++) {
                apples[apple] = new objects.Apple("apple");
                apples[apple].SetUpApple(3, this.getAppleSpeed());
                apples[apple].scaleX = 0.4;
                apples[apple].scaleY = 0.4;
                game.addChild(apples[apple]);
            }
            //add scoreboard
            hud = new objects.HUD();
            // add bullet manager
            bulletManager = new managers.BulletManager();
            //add game container to stage
            stage.addChild(game);
        };
        Play.prototype.Shoot = function () {
            if (stage.mouseY < 550)
                config.FIRING = true; // only fire if player clicks higher than the button bar.
        };
        // re-add apples to the game and pause for player.
        Play.prototype.NextWave = function () {
            this.wave++;
            for (var apple = 0; apple < this.getNumApples(); apple++) {
                apples[apple] = new objects.Apple("apple");
                apples[apple].SetUpApple(2, this.getAppleSpeed());
                apples[apple].scaleX = 0.4;
                apples[apple].scaleY = 0.4;
                game.addChild(apples[apple]);
            }
            hud.btnPause_Click();
        };
        // show gameover screen.
        Play.prototype.GameOver = function () {
            createjs.Sound.stop();
            // stop all sound, then play the wall falling down sound...
            createjs.Sound.play("wall_fall");
            game.removeAllChildren();
            currentState = config.GAME_OVER_STATE;
            changeState();
        };
        // get apples for this wave
        Play.prototype.getNumApples = function () {
            var num = this.wave * 10;
            return num;
        };
        // get random apple speed for this wave, called for each apple on creation.
        Play.prototype.getAppleSpeed = function () {
            // generate random speed between wave # and 1 a max of 6;
            var max = 6;
            if (this.wave <= 6)
                max = this.wave;
            var num = Math.floor(Math.random() * (max - 1 + 1)) + 1;
            var num = (num / 10) + 0.6;
            return num;
        };
        // upgrade the wall, uses CreateWall().
        Play.prototype.UpgradeWall = function () {
            game.removeChild(wall);
            switch (this.wallType) {
                case "wood":
                    this.wallType = "brick";
                    this.CreateWall("brick_wall", 2500);
                    money -= 1000;
                    break;
                case "brick":
                    this.wallType = "steel";
                    this.CreateWall("steel_wall", 5000);
                    money -= 2500;
                    break;
            }
        };
        // Special method to draw the desired wall on the screen
        Play.prototype.CreateWall = function (stringData, health) {
            wall = new objects.Wall(stringData);
            wall.SetUpWall(canvas.clientWidth * 0.75, 0, health);
            wall.scaleY = 1.47; // exact to avoid overlap when re-drawn. Don't Ask :(
            wall.alpha = 0.8;
            game.addChild(wall);
            game.removeChild(gunner);
            game.addChild(gunner);
        };
        // removes upgrade button & label when max has been reached.
        Play.prototype.RemoveWallUpgrades = function () {
            game.removeChild(btnUpgradeWall);
            game.removeChild(hud.lblWallUpgradeCost);
        };
        // removes upgrade button & label when max has been reached.
        Play.prototype.RemoveClipUpgrade = function () {
            game.removeChild(btnUpgradeClip);
            game.removeChild(hud.lblClipUpgradeCost);
        };
        // removes upgrade button & label when max has been reached.
        Play.prototype.RemoveReloadUpgrade = function () {
            game.removeChild(btnUpgradeRTime);
            game.removeChild(hud.lblReloadUpgradeCost);
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map