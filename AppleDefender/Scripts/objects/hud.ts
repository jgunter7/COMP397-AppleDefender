module objects {
    // HEADS UP DISPLAY - for game
    export class HUD {
        // PUBLIC PROPERTIES
        private lblClip: objects.Label;
        private lblWall: objects.Label;
        private lblWave: objects.Label;
        private lblScore: objects.Label;
        private lblReload: objects.Label;
        private lblMoney: objects.Label;
        private lblApples: objects.Label;
        public lblWallUpgradeCost: objects.Label;
        public lblClipUpgradeCost: objects.Label;
        public lblReloadUpgradeCost: objects.Label;

        // CONSTRUCTOR +++++++++++++++++++
        constructor() {
            // Game labels
            this.lblWall = new objects.Label("Health:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 925, 540);
            this.lblClip = new objects.Label("Clip:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 1120, 540);
            this.lblScore = new objects.Label("Score:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 50, 540);
            this.lblWave = new objects.Label("Wave:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 50, 680);
            this.lblReload = new objects.Label("Reload Time:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 1160, 680);
            this.lblMoney = new objects.Label("Money:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 50, 610);
            this.lblApples = new objects.Label("Apples Remaining:", config.FONT_SMALL, config.FONT_FAMILY, config.YELLOW, 700, 680);
            this.lblClipUpgradeCost = new objects.Label("Clip: $1000", config.FONT_SMALL, config.FONT_FAMILY, config.GREEN, 250, 570);
            this.lblReloadUpgradeCost = new objects.Label("Reload: $1000", config.FONT_SMALL, config.FONT_FAMILY, config.GREEN, 435, 570);
            this.lblWallUpgradeCost = new objects.Label("Wall: $1000", config.FONT_SMALL, config.FONT_FAMILY, config.GREEN, 955, 570);
            // Add game labels
            game.addChild(this.lblWallUpgradeCost);
            game.addChild(this.lblClipUpgradeCost);
            game.addChild(this.lblReloadUpgradeCost);
            game.addChild(this.lblApples);
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
            btnUpgradeWall.x = 960;
            btnUpgradeWall.y = 615;
            btnUpgradeWall.on("click", this.btnUpgradeWall_Click);
            btnUpgradeRTime = new objects.Button("upgrade");
            btnUpgradeRTime.x = 435;
            btnUpgradeRTime.y = 615;
            btnUpgradeRTime.on("click", this.btnUpgradeRTime_Click);
            btnUpgradeClip = new objects.Button("upgrade");
            btnUpgradeClip.x = 250;
            btnUpgradeClip.y = 615;
            btnUpgradeClip.on("click", this.btnUpgradeClip_Click);
            // Add game buttons
            game.addChild(btnUpgradeClip);
            game.addChild(btnUpgradeRTime);
            game.addChild(btnPause);
            game.addChild(btnQuit);
            game.addChild(btnReload);
            game.addChild(btnUpgradeWall);
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            //Show clip
            if (bulletManager.reload)
                this.lblClip.text = "Reloading...";
            else this.lblClip.text = "Clip: " + gunner.clip;

            this.lblApples.text = "Apples Remaining: " + apples.length;
            this.lblWall.text = "Health: " + Math.floor(wall.health);
            this.lblWave.text = "Wave: " + play.wave;
            this.lblScore.text = "Score: " + score;
            this.lblReload.text = "Reload Time: " + gunner.reloadTime;
            this.lblMoney.text = "Money: " + money;
            this.lblClipUpgradeCost.text = "Clip: $" + play.clipCost;
            this.lblReloadUpgradeCost.text = "Reload: $" + play.reloadCost;
            this.lblWallUpgradeCost.text = "Wall: $" + play.wallCost;
        }

        public btnPause_Click() {
            pause = true;
            game.removeChild(btnPause);
            game.addChild(btnPlay);
            config.FIRING = false;
        }

        private btnPlay_Click() {
            config.FIRING = false;
            pause = false;
            game.removeChild(btnPlay);
            game.addChild(btnPause);
            config.FIRING = false;
        }

        private btnQuit_Click() {
            createjs.Sound.stop();
            game.removeAllChildren();
            currentState = config.MENU_STATE;
            changeState();
        }

        private btnReload_Click() {
            gunner.clip = 0; // forces a reload.
            bulletManager.ReloadGun();
            game.removeChild(btnReload); // removes reload button while a reload is performed.
        }

        private btnUpgradeWall_Click() {
            switch (play.wallType) {
                case "wood":
                    if (money >= play.wallCost) {
                        play.UpgradeWall();
                        play.wallCost = 2500;
                    }
                    break;
                case "brick":
                    if (money >= play.wallCost) {
                        play.UpgradeWall();
                        play.RemoveWallUpgrades();
                    }
                    break;
            }
        }

        private btnUpgradeRTime_Click() {
            if (money >= play.reloadCost) {
                gunner.reloadTime--;
                money -= play.reloadCost;
                play.reloadCost += 1000;
            }
            if (play.reloadCost >= 5000) {
                play.RemoveReloadUpgrade();
            }
        }

        private btnUpgradeClip_Click() {
            if (money >= play.clipCost) {
                gunner.maxClip += 10;
                gunner.clip = gunner.maxClip;
                money -= play.clipCost;
                play.clipCost += 1000;
            }
            if (play.clipCost >= 5000) {
                play.RemoveClipUpgrade();
            }
        }
    }
}  