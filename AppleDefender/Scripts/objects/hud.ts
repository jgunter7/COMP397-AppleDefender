module objects {
    export class HUD {
        // PUBLIC PROPERTIES
        private lblClip: objects.Label;
        private lblWall: objects.Label;
        private lblWave: objects.Label;
        private lblScore: objects.Label;
        private lblReload: objects.Label;
        private lblMoney: objects.Label;

        // CONSTRUCTOR +++++++++++++++++++
        constructor() {
            // Game labels
            this.lblWall = new objects.Label("Health:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 925, 540);
            this.lblClip = new objects.Label("Clip:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 1120, 540);
            this.lblScore = new objects.Label("Score:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 50, 540);
            this.lblWave = new objects.Label("Wave:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 50, 680);
            this.lblReload = new objects.Label("Reload Time:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 1160, 680);
            this.lblMoney = new objects.Label("Money:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 50, 610);

            // Add game labels
            game.addChild(this.lblMoney);
            game.addChild(this.lblReload);
            game.addChild(this.lblWave);
            game.addChild(this.lblScore);
            game.addChild(this.lblWall);
            game.addChild(this.lblClip);

            // Game buttons
            btnPause = new objects.Button("pause");
            btnPause.x = 200;
            btnPause.y = 680;
            btnPause.on("click", this.btnPause_Click);
            btnPlay = new objects.Button("play");
            btnPlay.x = 350;
            btnPlay.y = 680;
            btnPlay.on("click", this.btnPlay_Click);
            btnQuit = new objects.Button("quit2");
            btnQuit.x = 500;
            btnQuit.y = 680;
            btnQuit.on("click", this.btnQuit_Click);
            btnReload = new objects.Button("reload");
            btnReload.x = 1160;
            btnReload.y = 615;
            btnReload.on("click", this.btnReload_Click);
            btnUpgradeWall = new objects.Button("upgrade");
            btnUpgradeWall.x = 925;
            btnUpgradeWall.y = 615;
            btnUpgradeWall.on("click", this.btnUpgradeWall_Click);
            // Add game buttons
            game.addChild(btnPause);
            game.addChild(btnQuit);
            game.addChild(btnReload);
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            //Show clip
            if (bulletManager.reload)
                this.lblClip.text = "Reloading...";
            else this.lblClip.text = "Clip: " + gunner.clip;

            this.lblWall.text = "Health: " + Math.floor(wall.health);
            this.lblWave.text = "Wave: " + play.wave;
            this.lblScore.text = "Score: " + score;
            this.lblReload.text = "Reload Time: " + gunner.reloadTime;
            this.lblMoney.text = "Money: " + money;
        }

        private btnPause_Click() {
            pause = true;
            game.removeChild(btnPause);
            game.addChild(btnPlay);
            config.FIRING = false;
        }

        private btnPlay_Click() {
            pause = false;
            config.FIRING = false;
            game.removeChild(btnPlay);
            game.addChild(btnPause);
            config.FIRING = false;
        }

        private btnQuit_Click() {
            game.removeAllChildren();
            currentState = config.MENU_STATE;
            changeState();
        }

        private btnReload_Click() {
            const loopLength = 1; // in seconds
            var loopTimes = (gunner.reloadTime / loopLength) - 1;
            createjs.Sound.play("reload", { loop: loopTimes});
            gunner.clip = 1; // forces a reload, cant seem to stop bullet being deployed onclick.
            game.removeChild(btnReload); // removes reload button while a reload is performed.
        }

        private btnUpgradeWall_Click() {
            if (money >= 
        }
    }
}  