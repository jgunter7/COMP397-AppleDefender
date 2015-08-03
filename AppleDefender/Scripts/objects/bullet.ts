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
            this.calcVector();
            this.calcPosition();
            //collision.check(new objects.GameObject);
        }
    }
} 