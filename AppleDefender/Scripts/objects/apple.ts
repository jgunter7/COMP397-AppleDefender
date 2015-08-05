module objects {
    // Apple Class
    export class Apple extends objects.GameObject {
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++
        public dieSound;
        public health: number;
        public eating: boolean;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.sound = "hit";
            this.dieSound = "die";

            this.eating = false;
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public SetUpApple(health: number, speed: number) {
            this.health = health;
            this.speed = speed;
            //y = between 0 and 520 - height
            //x = -width and -500
            this.y = Math.floor(Math.random() * (520 - 0 + 1)) + 0;
            this.x = -1 * (Math.floor(Math.random() * (this.getTransformedBounds().width - 500 + 1)) + 500);
        }

        public update(): void { 
            this.CheckHealth();
            this.CheckBounds();
            if (!this.eating)
                this.x += this.speed; // move apple towards the wall.
            else {
                wall.health -= 0.01;
            }
        }

        private CheckBounds() {
            var max = (canvas.clientWidth * 0.75) - (this.getTransformedBounds().width);
            if (this.x >= max)
                this.eating = true;
        }

        private CheckHealth() {
            if (this.health <= 0)
                this.DestroyApple();
        }

        public DestroyApple() {
            createjs.Sound.play(this.dieSound);
            
            var len: number = apples.length;
            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (apples[count] == this) {
                    apples.splice(count, 1);
                    game.removeChild(this);
                }
            }
        }
    }
}   