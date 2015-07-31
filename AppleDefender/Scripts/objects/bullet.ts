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
            this.direction = avatar.direction;
            this.speed = config.BULLET_SPEED;
            this.x = avatar.x;
            this.y = avatar.y;
        }

        update() {
            this.calcVector();
            this.calcPosition();
        }
    }
} 