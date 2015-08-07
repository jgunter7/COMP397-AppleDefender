module objects {
    // Apple Class
    export class Apple extends objects.GameObject {
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++
        public dieSound;
        public health: number;
        public eating: boolean;
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.sound = "hit";
            this.dieSound = "die";

            this.eating = false;
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public SetUpApple(health: number, speed: number) {
            this.health = health;
            this.speed = speed;
            //y = between 0 and 520 - height
            //x = -width and -500
            this.y = Math.floor(Math.random() * (520 - 5 + 1)) + 5;
            this.x = -1 * (Math.floor(Math.random() * (this.GetMaxOffScreen() - 50 + 1)) + 50);
        }

        private GetMaxOffScreen(): number {
            var wave = apples.length / 10;
            var num = (((wave - 1) * 100) + 1000);
            return num;
        }

        // move closer or attack the wall.
        public update(): void { 
            this.CheckHealth();
            this.CheckBounds();
            if (!this.eating)
                this.x += this.speed; // move apple towards the wall.
            else {
                wall.health -= 0.01;  // else: decrease wall health.
            }
        }

        // check if apple is attacking or moving closer.
        private CheckBounds() {
            var max = (canvas.clientWidth * 0.75) - (wall.getTransformedBounds().width / 2) - (this.getTransformedBounds().width / 2);
            if (this.x >= max)
                this.eating = true;
        }

        // check each apple's helth.
        private CheckHealth() {
            if (this.health <= 0)
                this.DestroyApple();
        }

        // remove apple from list of apples.
        public DestroyApple() {
            createjs.Sound.play(this.dieSound);
            score += 25; // 25 score for each kill.
            money += 50; // $50 for each kill

            var len: number = apples.length;
            // remove apple from game and from apple array
            for (var count = 0; count < len; count++) {
                if (apples[count] == this) {
                    apples.splice(count, 1);
                    game.removeChild(this);
                }
            }
        }
    }
}   