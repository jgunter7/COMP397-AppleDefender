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
            this.direction = gunner.direction;
            this.speed = config.BULLET_SPEED;
            this.x = gunner.x;
            this.y = gunner.y;
        }

        update() {
            this.CheckCollision();
            this.calcVector();
            this.calcPosition();
        }

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

        private destroy() {
            bulletManager._destroyBullet(this);
        }
    }
} 