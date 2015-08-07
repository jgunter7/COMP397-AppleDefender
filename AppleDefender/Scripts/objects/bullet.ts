module objects {

    // Bullet Class
    export class Bullet extends objects.GameObject {
        constructor() {
            super("bullet");
            this.init();
            game.addChild(this);
        }

        // PUBLIC METHODS
        public init() {
            this.direction = gunner.direction; // copy gun direction.
            this.speed = config.BULLET_SPEED; // set predetermined bullet speed.
            this.x = gunner.x; // starts in middle of gun, doesn't matter, moves very fast.
            this.y = gunner.y;
        }

        update() {
            this.CheckCollision();
            this.calcVector(); // gameobject
            this.calcPosition(); // gameobject
        }

        // check if a bullet is colliding.
        private CheckCollision() {
            for (var apple = 0; apple < apples.length; apple++) {
                if (this.getTransformedBounds().intersects(apples[apple].getTransformedBounds())) {
                    apples[apple].health--; 
                    this.destroy();
                    if (apples[apple].health > 0)
                        createjs.Sound.play(apples[apple].sound);
                    else apples[apple].DestroyApple();
                }
            }    
        }

        // remove a bullet
        private destroy() {
            bulletManager._destroyBullet(this);
        }
    }
} 