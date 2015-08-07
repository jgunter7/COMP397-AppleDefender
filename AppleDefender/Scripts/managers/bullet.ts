module managers {
    // BULLET MANAGER CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class BulletManager {
        // PRIVATE PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++++
        private _bullets = [];
        private _bulletCount: number = 0;
        public reload: boolean = false;
        private waitTime: number = 0;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++

        // BULLET FIRE METHOD
        private _fire() {
            // fire bullet from the gun
            var bullet: objects.Bullet = new objects.Bullet();

            game.addChild(bullet);
            bullet.init();
            this._bullets.push(bullet);

            // Play Bullet Sound
            createjs.Sound.play("shot");
            config.FIRING = false;
        } // end fire

        // BULLET DESTROY METHOD
        public _destroyBullet(bullet: objects.Bullet) {
            var len: number = this._bullets.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this._bullets[count] == bullet) {
                    this._bullets.splice(count, 1);
                    game.removeChild(bullet);
                }
            }
        } // end destroyBullet

        private _checkBounds(bullet: objects.Bullet) {
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
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        // UPDATE METHOD
        update() {
            var len: number = this._bullets.length;
            var bullet: objects.Bullet;

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
        } // end update

        // make reload sound and timeout bullet firing
        public ReloadGun() {
            const loopLength = 1; // in seconds
            var loopTimes = (gunner.reloadTime / loopLength) - 1;
            createjs.Sound.play("reload", { loop: loopTimes });
            this.reload = true;
            this.waitTime = 0;
            config.FIRING = false;
            game.removeChild(btnReload);
        }

        // checks to see if timeout is over so player can fire again.
        private CheckReloadDone() {
            if (60 * gunner.reloadTime <= this.waitTime) {
                gunner.clip = gunner.maxClip;
                this.reload = false;
                game.addChild(btnReload);
            }
            else {
                this.waitTime++;
                config.FIRING = false;
            }
        }        
    }
}  