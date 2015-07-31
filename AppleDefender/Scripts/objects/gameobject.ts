module objects {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    export class GameObject extends createjs.Sprite {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        public width: number;
        public height: number;
        public turnRate: number;
        public speed: number;
        public direction: number;
        public isColliding: boolean = false;
        public sound: string = "";
        public name: string = "";

        // PROTECTED PROPERTIES +++++++++++++++++++++++++++
        protected dy: number;
        protected dx: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(assets.atlas, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++

        // Calculate the game object's new x and y coordinates
        public calcVector() {
            var radians: number = this.direction * (Math.PI / 180);
            this.dx = this.speed * Math.cos(radians);
            this.dy = this.speed * Math.sin(radians);
            this.dy *= -1;
        }

        // Calculate the game object's new position
        public calcPosition() {
            this.x += this.dx;
            this.y += this.dy;
        }

        // Turn Left Method
        public turnLeft() {
            this.rotation -= this.turnRate;
            this.direction += this.turnRate;
            if (this.direction > 360) {
                this.direction = this.turnRate;
            }

        }

        // Turn Right Method
        public turnRight() {
            this.rotation += this.turnRate;
            this.direction -= this.turnRate;
            if (this.direction < 0) {
                this.direction = 360 - this.turnRate;
            }
        }

        // slide Left Method
        public slideLeft() {
            this.x -= config.PLAYER_SLIDE;

        }

        // slide Right Method
        public slideRight() {
            this.x += config.PLAYER_SLIDE;
        }


    }
}   