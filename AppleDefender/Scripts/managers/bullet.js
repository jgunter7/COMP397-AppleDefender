var managers;
(function (managers) {
    // BULLET MANAGER CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++
    var BulletManager = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function BulletManager() {
            // PRIVATE PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++++
            this._bullets = [];
            this._bulletCount = 0;
            this.reload = false;
            this.waitTime = 0;
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++
        // BULLET FIRE METHOD
        BulletManager.prototype._fire = function () {
            // fire bullet from the gun
            var bullet = new objects.Bullet();
            game.addChild(bullet);
            bullet.init();
            this._bullets.push(bullet);
            // Play Bullet Sound
            createjs.Sound.play("shot");
            config.FIRING = false;
        }; // end fire
        // BULLET DESTROY METHOD
        BulletManager.prototype._destroyBullet = function (bullet) {
            var len = this._bullets.length;
            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this._bullets[count] == bullet) {
                    this._bullets.splice(count, 1);
                    game.removeChild(bullet);
                }
            }
        }; // end destroyBullet
        BulletManager.prototype._checkBounds = function (bullet) {
            // check to see if the bullet has left the top of the stage
            if (bullet.y < 0) {
                this._destroyBullet(bullet);
                agCount == 0;
            }
            // check to see if the bullet has left the bottom of the stage
            if (bullet.y > 520) {
                this._destroyBullet(bullet);
                agCount == 0;
            }
            // check to see if the bullet has left the left side of the stage
            if (bullet.x < 0) {
                this._destroyBullet(bullet);
                agCount == 0;
            }
            // check to see if the bullet has left the right side of the stage
            if (bullet.x > 1280) {
                this._destroyBullet(bullet);
                // bullet left screen from behind gun, count up to 5 to enable the autogun cheat...
                agCount++;
                if (agCount == 5)
                    autoGun = true;
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // UPDATE METHOD
        BulletManager.prototype.update = function () {
            var len = this._bullets.length;
            var bullet;
            for (var count = len - 1; count >= 0; count--) {
                bullet = this._bullets[count];
                // move current bullet up stage
                bullet.update();
                this._checkBounds(bullet);
            }
            if (this.reload) {
                this.CheckReloadDone();
            }
            // fire bullet if mouse button is clicked or game container is tapped
            if ((config.FIRING) && (this._bulletCount % 10 == 0) && !this.reload) {
                this._fire();
                gunner.clip--;
                if (gunner.clip == 0)
                    this.ReloadGun();
            }
            //increment bullet count to limit number of bullets being fired
            this._bulletCount++;
        }; // end update
        // make reload sound and timeout bullet firing
        BulletManager.prototype.ReloadGun = function () {
            var loopLength = 1; // in seconds
            var loopTimes = (gunner.reloadTime / loopLength) - 1;
            createjs.Sound.play("reload", { loop: loopTimes });
            this.reload = true;
            this.waitTime = 0;
            config.FIRING = false;
            game.removeChild(btnReload);
        };
        // checks to see if timeout is over so player can fire again.
        BulletManager.prototype.CheckReloadDone = function () {
            if (60 * gunner.reloadTime <= this.waitTime) {
                gunner.clip = gunner.maxClip;
                this.reload = false;
                game.addChild(btnReload);
            }
            else {
                this.waitTime++;
                config.FIRING = false;
            }
        };
        return BulletManager;
    })();
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map